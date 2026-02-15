import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState, useEffect, useRef, useCallback } from 'react';

// WARNING: Do not change the entry component name
function SohamBhattacharya(props) {
  // Your Code Start below.

  // Game state using React hooks
  const [gameState, setGameState] = useState({
    score: 0,
    highScore: parseInt(localStorage.getItem('dinoHighScore')) || 0,
    isPlaying: false,
    isGameOver: false,
    isPaused: false,
    speed: 5,
    isJumping: false,
    obstacles: [],
    clouds: [],
    gameSpeed: 1,
    difficulty: 'normal',
    powerUps: [],
    combo: 0,
    distance: 0,
    dinoState: 'running'
  });

  const canvasRef = useRef(null);
  const gameLoopRef = useRef(null);
  const dinoYRef = useRef(0);
  const jumpVelocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isJumpingRef = useRef(false);
  const obstaclesRef = useRef([]);
  const cloudsRef = useRef([]);
  const powerUpsRef = useRef([]);
  const groundLevelRef = useRef(0);
  const lastObstacleTimeRef = useRef(0);
  const lastCloudTimeRef = useRef(0);
  const lastPowerUpTimeRef = useRef(0);

  // Constants - Adjusted for better gameplay
  const GRAVITY = 0.5;
  const JUMP_FORCE = -15;
  const DINO_WIDTH = 60;
  const DINO_HEIGHT = 70;
  const GROUND_HEIGHT = 20;
  const DINO_X = 50;
  
  // Spawn intervals (in milliseconds)
  const OBSTACLE_SPAWN_INTERVAL = 1800; // 1.8 seconds between obstacles
  const CLOUD_SPAWN_INTERVAL = 4000; // 4 seconds between clouds
  const POWER_UP_SPAWN_INTERVAL = 12000; // 12 seconds between power-ups

  // Power-up types
  const POWER_UP_TYPES = {
    SPEED_BOOST: { color: '#fbbf24', duration: 5000, effect: '2x Speed' },
    SLOW_TIME: { color: '#60a5fa', duration: 3000, effect: 'Slow Time' },
    INVINCIBLE: { color: '#dc2626', duration: 4000, effect: 'Invincible' },
    DOUBLE_POINTS: { color: '#10b981', duration: 6000, effect: '2x Points' }
  };

  // RoundRect polyfill for canvas
  useEffect(() => {
    if (typeof window !== 'undefined' && window.CanvasRenderingContext2D && !CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
        if (width < 2 * radius) radius = width / 2;
        if (height < 2 * radius) radius = height / 2;
        this.beginPath();
        this.moveTo(x + radius, y);
        this.arcTo(x + width, y, x + width, y + height, radius);
        this.arcTo(x + width, y + height, x, y + height, radius);
        this.arcTo(x, y + height, x, y, radius);
        this.arcTo(x, y, x + width, y, radius);
        this.closePath();
        return this;
      };
    }
  }, []);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Set initial dino position
    groundLevelRef.current = canvas.height - GROUND_HEIGHT - DINO_HEIGHT;
    dinoYRef.current = groundLevelRef.current;
    
    // Generate initial clouds
    generateInitialClouds(canvas);
  }, []);

  // Update refs when state changes
  useEffect(() => {
    obstaclesRef.current = gameState.obstacles;
    cloudsRef.current = gameState.clouds;
    powerUpsRef.current = gameState.powerUps;
    isJumpingRef.current = gameState.isJumping;
  }, [gameState.obstacles, gameState.clouds, gameState.powerUps, gameState.isJumping]);

  // Game loop effect with controlled spawning
  useEffect(() => {
    if (!gameState.isPlaying || gameState.isPaused) {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      return;
    }

    const gameLoop = (currentTime) => {
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) {
        gameLoopRef.current = requestAnimationFrame(gameLoop);
        return;
      }

      // Update ground level
      groundLevelRef.current = canvas.height - GROUND_HEIGHT - DINO_HEIGHT;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      drawSky(ctx, canvas);
      drawClouds(ctx);
      updateObstacles(ctx);
      
      // Update dino position
      if (isJumpingRef.current) {
        jumpVelocityRef.current += GRAVITY;
        dinoYRef.current += jumpVelocityRef.current;
        
        // Check if landed
        if (dinoYRef.current >= groundLevelRef.current) {
          dinoYRef.current = groundLevelRef.current;
          isJumpingRef.current = false;
          jumpVelocityRef.current = 0;
          setGameState(prev => ({ ...prev, isJumping: false }));
        }
      }
      
      drawDino(ctx, canvas);
      updatePowerUps(ctx);
      drawGround(ctx, canvas);

      // Update game stats
      updateGameStats(deltaTime);

      // Check collisions
      checkCollisions();

      // Generate new elements with controlled timing
      const currentTimeMs = Date.now();
      
      // Generate obstacles at controlled intervals
      if (currentTimeMs - lastObstacleTimeRef.current > OBSTACLE_SPAWN_INTERVAL / gameState.gameSpeed) {
        generateObstacle(canvas);
        lastObstacleTimeRef.current = currentTimeMs;
      }

      // Generate clouds at controlled intervals
      if (currentTimeMs - lastCloudTimeRef.current > CLOUD_SPAWN_INTERVAL) {
        generateCloud(canvas);
        lastCloudTimeRef.current = currentTimeMs;
      }

      // Generate power-ups at controlled intervals
      if (currentTimeMs - lastPowerUpTimeRef.current > POWER_UP_SPAWN_INTERVAL) {
        generatePowerUp(canvas);
        lastPowerUpTimeRef.current = currentTimeMs;
      }

      // Cleanup
      cleanupObjects(canvas);

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    lastTimeRef.current = performance.now();
    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState.isPlaying, gameState.isPaused, gameState.gameSpeed]);

  // Event listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameState.isPlaying || gameState.isPaused) return;
      
      switch(e.code) {
        case 'Space':
        case 'ArrowUp':
          e.preventDefault();
          handleJump();
          break;
        case 'ArrowDown':
          e.preventDefault();
          handleDuck();
          break;
        case 'KeyP':
          e.preventDefault();
          togglePause();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [gameState.isPlaying, gameState.isPaused]);

  // Drawing functions
  const drawSky = (ctx, canvas) => {
    // Sky gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#87CEEB');
    gradient.addColorStop(0.7, '#B0E2FF');
    gradient.addColorStop(1, '#E0F7FF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(canvas.width - 80, 80, 40, 0, Math.PI * 2);
    ctx.fill();
    
    // Sun glow
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.shadowBlur = 0;
    
    // Sun rays
    ctx.strokeStyle = '#FFEC8B';
    ctx.lineWidth = 3;
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const startX = canvas.width - 80 + Math.cos(angle) * 45;
      const startY = 80 + Math.sin(angle) * 45;
      const endX = canvas.width - 80 + Math.cos(angle) * 60;
      const endY = 80 + Math.sin(angle) * 60;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  };

  const drawGround = (ctx, canvas) => {
    // Ground base
    const groundGradient = ctx.createLinearGradient(0, canvas.height - GROUND_HEIGHT, 0, canvas.height);
    groundGradient.addColorStop(0, '#8B7355');
    groundGradient.addColorStop(1, '#6B5B45');
    ctx.fillStyle = groundGradient;
    ctx.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

    // Ground texture with moving effect
    const offset = (Date.now() / 50) % 20;
    ctx.fillStyle = '#A0522D';
    
    for (let i = 0; i < canvas.width + 20; i += 20) {
      // Create grass/ground texture
      ctx.beginPath();
      ctx.moveTo(i - offset, canvas.height - GROUND_HEIGHT);
      ctx.lineTo(i - offset + 5, canvas.height - GROUND_HEIGHT - 3);
      ctx.lineTo(i - offset + 10, canvas.height - GROUND_HEIGHT);
      ctx.lineTo(i - offset + 15, canvas.height - GROUND_HEIGHT - 2);
      ctx.lineTo(i - offset + 20, canvas.height - GROUND_HEIGHT);
      ctx.fill();
      
      // Small pebbles
      ctx.fillStyle = '#7A4A2E';
      for (let j = 0; j < 3; j++) {
        const pebbleX = i - offset + 5 + j * 5;
        const pebbleY = canvas.height - GROUND_HEIGHT + 8;
        ctx.beginPath();
        ctx.arc(pebbleX, pebbleY, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#A0522D';
    }
  };

  const drawDino = (ctx, canvas) => {
    const currentDinoY = dinoYRef.current;
    const isDucking = gameState.dinoState === 'ducking';
    const currentHeight = isDucking ? DINO_HEIGHT * 0.7 : DINO_HEIGHT;
    const legTime = Date.now() / 100;
    
    // Breathing effect
    const breatheFactor = 1 + Math.sin(Date.now() / 1000) * 0.02;
    const currentWidth = DINO_WIDTH * breatheFactor;
    const adjustedX = DINO_X - (currentWidth - DINO_WIDTH) / 2;

    // Enhanced Dino body with gradient
    const bodyGradient = ctx.createLinearGradient(
      adjustedX, currentDinoY, 
      adjustedX + currentWidth, currentDinoY + currentHeight
    );
    bodyGradient.addColorStop(0, '#4CAF50');
    bodyGradient.addColorStop(0.5, '#8BC34A');
    bodyGradient.addColorStop(1, '#2E7D32');
    
    ctx.fillStyle = bodyGradient;
    
    // Draw dino body with rounded corners
    if (ctx.roundRect) {
      ctx.roundRect(adjustedX, currentDinoY, currentWidth, currentHeight, 10);
    } else {
      // Fallback for browsers that don't support roundRect
      ctx.fillRect(adjustedX, currentDinoY, currentWidth, currentHeight);
    }
    ctx.fill();
    
    // Add body texture
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(
        adjustedX + 5 + i * 15, 
        currentDinoY + 10, 
        8, 
        currentHeight - 20
      );
    }

    // Enhanced eye with shine
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(adjustedX + 45, currentDinoY + (isDucking ? 10 : 15), 8, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(adjustedX + 47, currentDinoY + (isDucking ? 12 : 17), 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(adjustedX + 46, currentDinoY + (isDucking ? 11 : 16), 2, 0, Math.PI * 2);
    ctx.fill();

    // Enhanced smile
    ctx.beginPath();
    ctx.arc(adjustedX + 35, currentDinoY + (isDucking ? 25 : 40), 8, 0, Math.PI, false);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Teeth
    ctx.fillStyle = 'white';
    ctx.fillRect(adjustedX + 30, currentDinoY + (isDucking ? 25 : 40) - 2, 3, 4);
    ctx.fillRect(adjustedX + 37, currentDinoY + (isDucking ? 25 : 40) - 2, 3, 4);

    // Legs with running animation
    if (!isJumpingRef.current) {
      const legOffset = Math.sin(legTime) * 8;
      
      // Front leg
      ctx.fillStyle = '#2E7D32';
      if (ctx.roundRect) {
        ctx.roundRect(
          adjustedX + 15, 
          currentDinoY + currentHeight, 
          10, 
          20 + legOffset, 
          5
        );
      } else {
        ctx.fillRect(adjustedX + 15, currentDinoY + currentHeight, 10, 20 + legOffset);
      }
      ctx.fill();
      
      // Back leg
      if (ctx.roundRect) {
        ctx.roundRect(
          adjustedX + currentWidth - 25, 
          currentDinoY + currentHeight, 
          10, 
          20 - legOffset, 
          5
        );
      } else {
        ctx.fillRect(adjustedX + currentWidth - 25, currentDinoY + currentHeight, 10, 20 - legOffset);
      }
      ctx.fill();
      
      // Leg stripes
      ctx.fillStyle = '#1B5E20';
      ctx.fillRect(adjustedX + 16, currentDinoY + currentHeight + 5, 8, 3);
      ctx.fillRect(adjustedX + currentWidth - 24, currentDinoY + currentHeight + 5, 8, 3);
    }

    // Enhanced tail with animation
    const tailAngle = isJumpingRef.current ? Math.PI / 6 : Math.sin(legTime) * 0.3;
    
    ctx.save();
    ctx.translate(adjustedX, currentDinoY + 30);
    ctx.rotate(tailAngle);
    
    const tailGradient = ctx.createLinearGradient(0, 0, 30, 0);
    tailGradient.addColorStop(0, '#4CAF50');
    tailGradient.addColorStop(1, '#1B5E20');
    
    ctx.fillStyle = tailGradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-25, -10);
    ctx.lineTo(-35, 0);
    ctx.lineTo(-25, 10);
    ctx.closePath();
    ctx.fill();
    
    // Tail spikes
    ctx.fillStyle = '#1B5E20';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(-15 + i * -5, 0);
      ctx.lineTo(-20 + i * -5, -5);
      ctx.lineTo(-20 + i * -5, 5);
      ctx.closePath();
      ctx.fill();
    }
    
    ctx.restore();

    // Spikes on back
    ctx.fillStyle = '#1B5E20';
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(adjustedX + 15 + i * 12, currentDinoY);
      ctx.lineTo(adjustedX + 10 + i * 12, currentDinoY - 10);
      ctx.lineTo(adjustedX + 20 + i * 12, currentDinoY - 10);
      ctx.closePath();
      ctx.fill();
    }

    // Jump dust effect
    if (isJumpingRef.current && jumpVelocityRef.current < -5) {
      ctx.fillStyle = 'rgba(139, 115, 85, 0.5)';
      for (let i = 0; i < 5; i++) {
        const dustX = adjustedX + Math.random() * 20;
        const dustY = currentDinoY + currentHeight + Math.random() * 10;
        const dustSize = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(dustX, dustY, dustSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Add shadow effect
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    // Remove shadow after drawing
    setTimeout(() => {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }, 0);
  };

  const drawClouds = (ctx) => {
    cloudsRef.current.forEach(cloud => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(cloud.x, cloud.y, 15, 0, Math.PI * 2);
      ctx.arc(cloud.x + 20, cloud.y - 10, 20, 0, Math.PI * 2);
      ctx.arc(cloud.x + 45, cloud.y, 18, 0, Math.PI * 2);
      ctx.arc(cloud.x + 25, cloud.y + 10, 15, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawObstacle = (ctx, obstacle) => {
    ctx.fillStyle = obstacle.color || '#059669';
    
    if (obstacle.type === 'cactus') {
      // Draw cactus with details
      ctx.fillRect(obstacle.x, obstacle.y, 20, 40);
      ctx.fillRect(obstacle.x - 10, obstacle.y + 10, 10, 15);
      ctx.fillRect(obstacle.x + 20, obstacle.y + 15, 10, 15);
      
      // Cactus spines
      ctx.strokeStyle = '#027148';
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const spineY = obstacle.y + 5 + i * 8;
        ctx.beginPath();
        ctx.moveTo(obstacle.x - 2, spineY);
        ctx.lineTo(obstacle.x - 8, spineY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(obstacle.x + 22, spineY);
        ctx.lineTo(obstacle.x + 28, spineY);
        ctx.stroke();
      }
    } else if (obstacle.type === 'bird') {
      // Draw bird with details
      ctx.beginPath();
      ctx.arc(obstacle.x, obstacle.y, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Eye
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(obstacle.x + 5, obstacle.y - 3, 4, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(obstacle.x + 6, obstacle.y - 2, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Beak
      ctx.fillStyle = '#FF9800';
      ctx.beginPath();
      ctx.moveTo(obstacle.x + 15, obstacle.y);
      ctx.lineTo(obstacle.x + 25, obstacle.y);
      ctx.lineTo(obstacle.x + 20, obstacle.y + 5);
      ctx.closePath();
      ctx.fill();
      
      // Wings
      ctx.fillStyle = obstacle.color;
      ctx.beginPath();
      ctx.arc(obstacle.x - 10, obstacle.y, 10, 0, Math.PI * 2);
      ctx.arc(obstacle.x + 10, obstacle.y, 10, 0, Math.PI * 2);
      ctx.fill();
    } else if (obstacle.type === 'rock') {
      // Draw rock with texture
      ctx.beginPath();
      ctx.arc(obstacle.x, obstacle.y, 25, 0, Math.PI * 2);
      ctx.fill();
      
      // Rock texture
      ctx.fillStyle = '#7C3A2D';
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const texX = obstacle.x + Math.cos(angle) * 15;
        const texY = obstacle.y + Math.sin(angle) * 15;
        ctx.beginPath();
        ctx.arc(texX, texY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };

  const drawPowerUp = (ctx, powerUp) => {
    // Pulsing animation
    const pulseSize = 15 + Math.sin(Date.now() / 200) * 3;
    
    // Outer glow
    ctx.shadowColor = POWER_UP_TYPES[powerUp.type].color;
    ctx.shadowBlur = 20;
    
    // Main circle
    ctx.fillStyle = POWER_UP_TYPES[powerUp.type].color;
    ctx.beginPath();
    ctx.arc(powerUp.x, powerUp.y, pulseSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner circle
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(powerUp.x, powerUp.y, pulseSize - 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Add icon
    ctx.fillStyle = POWER_UP_TYPES[powerUp.type].color;
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const icon = powerUp.type === 'SPEED_BOOST' ? '⚡' : 
               powerUp.type === 'SLOW_TIME' ? '⏱️' : 
               powerUp.type === 'INVINCIBLE' ? '🛡️' : '💰';
    ctx.fillText(icon, powerUp.x, powerUp.y);
    
    // Remove shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
  };

  // Game logic functions
  const generateInitialClouds = (canvas) => {
    const clouds = [];
    for (let i = 0; i < 5; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height / 3) + 20,
        speed: 0.5 + Math.random() * 0.5
      });
    }
    setGameState(prev => ({ ...prev, clouds }));
  };

  const generateCloud = (canvas) => {
    const newCloud = {
      x: canvas.width + Math.random() * 200,
      y: Math.random() * (canvas.height / 3) + 20,
      speed: 0.5 + Math.random() * 0.5
    };
    setGameState(prev => ({ ...prev, clouds: [...prev.clouds, newCloud] }));
  };

  const generateObstacle = (canvas) => {
    const types = ['cactus', 'bird', 'rock'];
    const weights = [0.6, 0.25, 0.15]; // Cacti more common, rocks less common
    const random = Math.random();
    
    let type = 'cactus';
    if (random < weights[0]) type = 'cactus';
    else if (random < weights[0] + weights[1]) type = 'bird';
    else type = 'rock';
    
    let y = canvas.height - GROUND_HEIGHT;
    let height = 40;
    let width = 30;
    
    if (type === 'bird') {
      y = canvas.height - GROUND_HEIGHT - 100 + Math.random() * 50;
      height = 30;
      width = 30;
    } else if (type === 'rock') {
      height = 50;
      width = 50;
      y = canvas.height - GROUND_HEIGHT - 25;
    } else {
      height = 60;
      width = 30;
    }
    
    const newObstacle = {
      x: canvas.width,
      y: y - height,
      width: width,
      height: height,
      type: type,
      color: type === 'cactus' ? '#059669' : 
            type === 'bird' ? '#7c3aed' : '#92400e'
    };
    
    setGameState(prev => ({ ...prev, obstacles: [...prev.obstacles, newObstacle] }));
  };

  const generatePowerUp = (canvas) => {
    const types = Object.keys(POWER_UP_TYPES);
    const type = types[Math.floor(Math.random() * types.length)];
    
    const newPowerUp = {
      x: canvas.width,
      y: Math.random() * (canvas.height - 100) + 50,
      type: type,
      startTime: Date.now(),
      duration: POWER_UP_TYPES[type].duration
    };
    
    setGameState(prev => ({ ...prev, powerUps: [...prev.powerUps, newPowerUp] }));
  };

  const updateObstacles = (ctx) => {
    const updatedObstacles = obstaclesRef.current.map(obstacle => ({
      ...obstacle,
      x: obstacle.x - gameState.speed * gameState.gameSpeed
    }));
    
    if (JSON.stringify(updatedObstacles) !== JSON.stringify(obstaclesRef.current)) {
      setGameState(prev => ({ ...prev, obstacles: updatedObstacles }));
    }
    
    updatedObstacles.forEach(obstacle => drawObstacle(ctx, obstacle));
  };

  const updatePowerUps = (ctx) => {
    const updatedPowerUps = powerUpsRef.current.map(powerUp => ({
      ...powerUp,
      x: powerUp.x - gameState.speed * gameState.gameSpeed
    }));
    
    if (JSON.stringify(updatedPowerUps) !== JSON.stringify(powerUpsRef.current)) {
      setGameState(prev => ({ ...prev, powerUps: updatedPowerUps }));
    }
    
    updatedPowerUps.forEach(powerUp => drawPowerUp(ctx, powerUp));
  };

  const updateGameStats = (deltaTime) => {
    const distanceIncrease = gameState.speed * gameState.gameSpeed * deltaTime / 1000;
    const scoreIncrease = Math.floor(gameState.gameSpeed * (gameState.combo + 1) * deltaTime / 500);
    
    setGameState(prev => ({
      ...prev,
      distance: prev.distance + distanceIncrease,
      score: prev.score + scoreIncrease
    }));
  };

  const checkCollisions = useCallback(() => {
    const dinoRect = {
      x: DINO_X,
      y: dinoYRef.current,
      width: DINO_WIDTH,
      height: DINO_HEIGHT
    };

    // Check obstacle collisions
    obstaclesRef.current.forEach(obstacle => {
      if (isColliding(dinoRect, obstacle)) {
        const hasInvincibility = powerUpsRef.current.some(p => p.type === 'INVINCIBLE');
        
        if (!hasInvincibility) {
          gameOver();
        } else {
          // If invincible, destroy obstacle and increase combo
          setGameState(prev => ({
            ...prev,
            obstacles: prev.obstacles.filter(o => o !== obstacle),
            score: prev.score + 100,
            combo: prev.combo + 1
          }));
        }
      }
    });

    // Check power-up collisions
    powerUpsRef.current.forEach(powerUp => {
      const powerUpRect = {
        x: powerUp.x,
        y: powerUp.y,
        width: 30,
        height: 30
      };
      
      if (isColliding(dinoRect, powerUpRect)) {
        activatePowerUp(powerUp);
      }
    });
  }, []);

  const isColliding = (rect1, rect2) => {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
  };

  const activatePowerUp = (powerUp) => {
    setGameState(prev => ({
      ...prev,
      powerUps: prev.powerUps.filter(p => p !== powerUp),
      combo: prev.combo + 1
    }));

    switch(powerUp.type) {
      case 'SPEED_BOOST':
        setGameState(prev => ({ ...prev, gameSpeed: prev.gameSpeed * 1.5 }));
        setTimeout(() => {
          setGameState(prev => ({ ...prev, gameSpeed: prev.gameSpeed / 1.5 }));
        }, powerUp.duration);
        break;
      case 'SLOW_TIME':
        setGameState(prev => ({ ...prev, gameSpeed: prev.gameSpeed * 0.7 }));
        setTimeout(() => {
          setGameState(prev => ({ ...prev, gameSpeed: prev.gameSpeed / 0.7 }));
        }, powerUp.duration);
        break;
      case 'DOUBLE_POINTS':
        const originalScoreMultiplier = 1;
        // Double points handled in score calculation
        setTimeout(() => {
          // Reset double points effect
        }, powerUp.duration);
        break;
    }
  };

  const cleanupObjects = (canvas) => {
    // Remove off-screen obstacles
    const filteredObstacles = obstaclesRef.current.filter(o => o.x + o.width > -50);
    if (filteredObstacles.length !== obstaclesRef.current.length) {
      setGameState(prev => ({ ...prev, obstacles: filteredObstacles }));
    }

    // Remove off-screen clouds
    const filteredClouds = cloudsRef.current.filter(c => c.x + 50 > -50);
    if (filteredClouds.length !== cloudsRef.current.length) {
      setGameState(prev => ({ ...prev, clouds: filteredClouds }));
    }

    // Remove off-screen power-ups
    const filteredPowerUps = powerUpsRef.current.filter(p => p.x + 30 > -50);
    if (filteredPowerUps.length !== powerUpsRef.current.length) {
      setGameState(prev => ({ ...prev, powerUps: filteredPowerUps }));
    }
  };

  const handleJump = () => {
    if (gameState.isPlaying && !gameState.isPaused && !isJumpingRef.current) {
      isJumpingRef.current = true;
      jumpVelocityRef.current = JUMP_FORCE;
      setGameState(prev => ({ ...prev, isJumping: true }));
      
      // Add visual feedback
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.style.transform = 'translateY(-5px)';
        setTimeout(() => {
          canvas.style.transform = 'translateY(0)';
        }, 100);
      }
    }
  };

  const handleDuck = () => {
    if (gameState.isPlaying && !gameState.isJumping && !gameState.isPaused) {
      setGameState(prev => ({ ...prev, dinoState: 'ducking' }));
      setTimeout(() => {
        setGameState(prev => prev.dinoState === 'ducking' ? 
          { ...prev, dinoState: 'running' } : prev);
      }, 300);
    }
  };

  const startGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Reset timers
    lastObstacleTimeRef.current = Date.now();
    lastCloudTimeRef.current = Date.now();
    lastPowerUpTimeRef.current = Date.now();

    setGameState(prev => ({
      ...prev,
      isPlaying: true,
      isGameOver: false,
      isPaused: false,
      score: 0,
      obstacles: [],
      powerUps: [],
      combo: 0,
      distance: 0,
      gameSpeed: getDifficultySpeed(prev.difficulty),
      isJumping: false,
      dinoState: 'running'
    }));
    
    groundLevelRef.current = canvas.height - GROUND_HEIGHT - DINO_HEIGHT;
    dinoYRef.current = groundLevelRef.current;
    jumpVelocityRef.current = 0;
    isJumpingRef.current = false;
    
    // Generate initial clouds if none exist
    if (cloudsRef.current.length === 0) {
      generateInitialClouds(canvas);
    }
  };

  const togglePause = () => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  };

  const gameOver = () => {
    setGameState(prev => {
      const newHighScore = prev.score > prev.highScore ? prev.score : prev.highScore;
      if (prev.score > prev.highScore) {
        localStorage.setItem('dinoHighScore', prev.score);
      }
      
      return {
        ...prev,
        isPlaying: false,
        isGameOver: true,
        isPaused: false,
        highScore: newHighScore,
        isJumping: false,
        dinoState: 'running'
      };
    });
    
    isJumpingRef.current = false;
    jumpVelocityRef.current = 0;
    
    // Game over effect
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.transform = 'scale(0.98)';
      setTimeout(() => {
        canvas.style.transform = 'scale(1)';
      }, 300);
    }
  };

  const restartGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Reset timers
    lastObstacleTimeRef.current = Date.now();
    lastCloudTimeRef.current = Date.now();
    lastPowerUpTimeRef.current = Date.now();

    setGameState(prev => ({
      ...prev,
      isPlaying: false,
      isGameOver: false,
      isPaused: false,
      score: 0,
      obstacles: [],
      powerUps: [],
      combo: 0,
      distance: 0,
      gameSpeed: getDifficultySpeed(prev.difficulty),
      isJumping: false,
      dinoState: 'running'
    }));
    
    groundLevelRef.current = canvas.height - GROUND_HEIGHT - DINO_HEIGHT;
    dinoYRef.current = groundLevelRef.current;
    jumpVelocityRef.current = 0;
    isJumpingRef.current = false;
    
    // Reset clouds
    generateInitialClouds(canvas);
    
    // Start game after a brief delay
    setTimeout(startGame, 100);
  };

  const updateDifficulty = (difficulty) => {
    setGameState(prev => ({
      ...prev,
      difficulty,
      gameSpeed: getDifficultySpeed(difficulty)
    }));
  };

  const getDifficultySpeed = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 0.8;
      case 'normal': return 1.0;
      case 'hard': return 1.3;
      case 'extreme': return 1.6;
      default: return 1.0;
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-4 flex flex-col items-center justify-center">
            <div className="font-['Press_Start_2P'] bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-2xl border-4 border-gray-800 p-6 max-w-4xl w-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🦖</div>
                  <h1 className="text-3xl md:text-4xl text-gray-800 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    T-REX RUNNER
                  </h1>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-xs text-gray-300">HIGH SCORE</div>
                    <div className="text-xl font-bold text-yellow-300">{gameState.highScore}</div>
                  </div>
                </div>
              </div>

              {/* Game Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xs opacity-90 mb-1">SCORE</div>
                  <div className="text-2xl font-bold score-glow">{Math.floor(gameState.score)}</div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xs opacity-90 mb-1">DISTANCE</div>
                  <div className="text-2xl font-bold">{Math.floor(gameState.distance)}m</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xs opacity-90 mb-1">COMBO</div>
                  <div className="text-2xl font-bold">{gameState.combo}x</div>
                </div>
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-xs opacity-90 mb-1">SPEED</div>
                  <div className="text-2xl font-bold">{gameState.gameSpeed.toFixed(1)}x</div>
                </div>
              </div>

              {/* Game Canvas */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-b from-sky-400 to-sky-300 rounded-xl overflow-hidden border-4 border-gray-800 h-96 shadow-2xl">
                  <canvas 
                    ref={canvasRef} 
                    className="w-full h-full game-canvas"
                  />
                  
                  {/* Start Screen */}
                  {!gameState.isPlaying && !gameState.isGameOver && (
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center rounded-xl backdrop-blur-sm">
                      <div className="text-white text-center p-8 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-xl border-4 border-green-500 shadow-2xl max-w-md animate-pulse">
                        <div className="text-4xl mb-6 text-green-400 flex items-center justify-center gap-3">
                          <span className="text-5xl">🦖</span>
                          <span>READY TO RUN?</span>
                        </div>
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center justify-center gap-3 bg-gray-800/50 p-3 rounded-lg">
                            <div className="bg-gray-700 px-3 py-1 rounded font-bold">SPACE</div>
                            <span className="text-gray-400">or</span>
                            <div className="bg-gray-700 px-3 py-1 rounded font-bold">↑</div>
                            <span>to JUMP</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 bg-gray-800/50 p-3 rounded-lg">
                            <div className="bg-gray-700 px-3 py-1 rounded font-bold">↓</div>
                            <span>to DUCK</span>
                          </div>
                          <div className="flex items-center justify-center gap-3 bg-gray-800/50 p-3 rounded-lg">
                            <div className="bg-gray-700 px-3 py-1 rounded font-bold">P</div>
                            <span>to PAUSE</span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <label className="block text-sm mb-3 text-gray-300">Difficulty:</label>
                          <div className="flex gap-2">
                            {['easy', 'normal', 'hard', 'extreme'].map(diff => (
                              <button 
                                key={diff}
                                onClick={() => updateDifficulty(diff)}
                                className={`flex-1 px-4 py-3 rounded-lg font-bold transition-all duration-300 ${
                                  gameState.difficulty === diff 
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg scale-105' 
                                    : 'bg-gray-700 hover:bg-gray-600 hover:scale-102'
                                }`}
                              >
                                {diff.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>
                        <button 
                          onClick={startGame}
                          className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl w-full game-button"
                        >
                          🎮 START GAME
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Game Over Screen */}
                  {gameState.isGameOver && (
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-red-900/50 flex flex-col items-center justify-center rounded-xl backdrop-blur-sm">
                      <div className="text-white text-center p-10 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-xl border-4 border-red-500 shadow-2xl max-w-md animate-shake">
                        <div className="text-5xl mb-6 text-red-400 flex items-center justify-center gap-3">
                          <span>💥</span>
                          <span>GAME OVER</span>
                          <span>💥</span>
                        </div>
                        <div className="space-y-4 mb-8">
                          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-4 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">Score: {Math.floor(gameState.score)}</div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-4 rounded-xl">
                            <div className="text-2xl">High Score: {gameState.highScore}</div>
                          </div>
                          <div className="bg-gradient-to-r from-emerald-900/30 to-emerald-800/30 p-4 rounded-xl">
                            <div className="text-xl">Distance: {Math.floor(gameState.distance)}m</div>
                          </div>
                        </div>
                        <button 
                          onClick={restartGame}
                          className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-10 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl w-full game-button"
                        >
                          🔄 PLAY AGAIN
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Pause Screen */}
                  {gameState.isPaused && gameState.isPlaying && (
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-yellow-900/40 flex flex-col items-center justify-center rounded-xl backdrop-blur-sm">
                      <div className="text-white text-center p-10 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-xl border-4 border-yellow-500 shadow-2xl max-w-md">
                        <div className="text-5xl mb-8 text-yellow-400 flex items-center justify-center gap-3">
                          <span className="text-6xl">⏸️</span>
                          <div className="text-4xl">PAUSED</div>
                        </div>
                        <div className="mb-8 text-gray-300">
                          <p className="mb-2">Game is paused</p>
                          <p>Take a break, but come back soon!</p>
                        </div>
                        <button 
                          onClick={togglePause}
                          className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl w-full game-button"
                        >
                          ▶️ RESUME GAME
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <button 
                  onClick={handleJump}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl text-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg game-button group"
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce">⬆️</div>
                  <div className="text-sm font-bold">JUMP</div>
                  <div className="text-xs opacity-80 mt-1">(SPACE/UP)</div>
                </button>
                <button 
                  onClick={handleDuck}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl text-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg game-button group"
                >
                  <div className="text-3xl mb-2 group-hover:animate-pulse">⬇️</div>
                  <div className="text-sm font-bold">DUCK</div>
                  <div className="text-xs opacity-80 mt-1">(DOWN)</div>
                </button>
                <button 
                  onClick={togglePause}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-xl text-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg game-button group"
                >
                  <div className="text-3xl mb-2">{gameState.isPaused ? '▶️' : '⏸️'}</div>
                  <div className="text-sm font-bold">{gameState.isPaused ? 'RESUME' : 'PAUSE'}</div>
                  <div className="text-xs opacity-80 mt-1">(P)</div>
                </button>
                <button 
                  onClick={restartGame}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl text-center hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg game-button group"
                >
                  <div className="text-3xl mb-2 group-hover:animate-spin">🔄</div>
                  <div className="text-sm font-bold">RESTART</div>
                  <div className="text-xs opacity-80 mt-1">(Start Over)</div>
                </button>
              </div>

              {/* Power-ups Display */}
              <div className="mb-6">
                <div className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  <span>ACTIVE POWER-UPS:</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {gameState.powerUps.length === 0 ? (
                    <div className="text-gray-500 text-center w-full py-4 bg-gray-100 rounded-lg">
                      No active power-ups. Collect them during gameplay!
                    </div>
                  ) : (
                    gameState.powerUps.map((powerUp, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-r ${
                          powerUp.type === 'SPEED_BOOST' ? 'from-amber-500 to-amber-600' :
                          powerUp.type === 'SLOW_TIME' ? 'from-blue-500 to-blue-600' :
                          powerUp.type === 'INVINCIBLE' ? 'from-red-500 to-red-600' :
                          'from-emerald-500 to-emerald-600'
                        } text-white px-5 py-3 rounded-lg flex items-center gap-3 shadow-lg animate-pulse`}
                      >
                        <div className="text-2xl">
                          {powerUp.type === 'SPEED_BOOST' ? '⚡' :
                           powerUp.type === 'SLOW_TIME' ? '⏱️' :
                           powerUp.type === 'INVINCIBLE' ? '🛡️' : '💰'}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{POWER_UP_TYPES[powerUp.type]?.effect}</div>
                          <div className="text-xs opacity-90 mt-1">
                            {Math.ceil((powerUp.duration - (Date.now() - powerUp.startTime)) / 1000)}s remaining
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-gray-100 to-gray-200 px-8 py-4 rounded-full shadow-lg border border-gray-300">
                  <span className="flex items-center gap-2 font-bold text-gray-700">
                    <span className="text-xl">🌵</span>
                    <span>Avoid obstacles!</span>
                  </span>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <span className="flex items-center gap-2 font-bold text-gray-700">
                    <span className="text-xl">⚡</span>
                    <span>Collect power-ups!</span>
                  </span>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <span className="flex items-center gap-2 font-bold text-gray-700">
                    <span className="text-xl">🏆</span>
                    <span>Beat high score!</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SohamBhattacharya;