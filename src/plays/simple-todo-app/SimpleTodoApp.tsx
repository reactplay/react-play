import React, { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

type TodoFilter = 'all' | 'active' | 'completed';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: number;
}

const STORAGE_KEY = 'react-play:simple-todo-app';
const FILTER_KEY = `${STORAGE_KEY}:filter`;

const seedData = [
  { id: 1, text: 'Learn TypeScript utility types', completed: false },
  { id: 2, text: 'Review pending pull requests', completed: true },
  { id: 3, text: 'Follow efebaslilar in github', completed: false }
];

const seededTodos: Todo[] = seedData.map((item, index) => ({
  ...item,
  createdAt: Date.now() - (seedData.length - index) * 1000
}));

function SimpleTodoApp(props: any) {
  const play = props.play ? props.play : props;
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window === 'undefined') {
      return seededTodos;
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return seededTodos;
      }

      const parsed = JSON.parse(stored) as Array<Partial<Todo>>;
      if (!Array.isArray(parsed)) {
        return seededTodos;
      }

      const fallbackTimestamp = Date.now();
      const sanitized = parsed
        .filter(
          (todo): todo is Partial<Todo> & Required<Pick<Todo, 'text'>> =>
            typeof todo === 'object' && todo !== null && typeof todo.text === 'string'
        )
        .map((todo, index) => ({
          id: typeof todo.id === 'number' ? todo.id : fallbackTimestamp + index,
          text: todo.text.trim(),
          completed: Boolean(todo.completed),
          createdAt: typeof todo.createdAt === 'number' ? todo.createdAt : fallbackTimestamp + index
        }))
        .filter((todo) => todo.text.length > 0);

      return sanitized.length > 0 ? sanitized : seededTodos;
    } catch {
      return seededTodos;
    }
  });
  const [filter, setFilter] = useState<TodoFilter>(() => {
    if (typeof window === 'undefined') {
      return 'all';
    }

    const stored = window.localStorage.getItem(FILTER_KEY);
    if (stored === 'active' || stored === 'completed' || stored === 'all') {
      return stored;
    }

    return 'all';
  });
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const [editingOriginalText, setEditingOriginalText] = useState('');
  const editInputRef = useRef<HTMLInputElement | null>(null);
  const cancellingEditRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(FILTER_KEY, filter);
  }, [filter]);

  useEffect(() => {
    if (editingId !== null) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    }
  }, [editingId]);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const visibleTodos = useMemo(() => {
    const sorted = filteredTodos.slice().sort((a, b) => {
      if (a.completed !== b.completed && filter === 'all') {
        return a.completed ? 1 : -1;
      }

      return b.createdAt - a.createdAt;
    });

    return sorted;
  }, [filteredTodos, filter]);

  const remainingCount = useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);

  const completedCount = todos.length - remainingCount;
  const completionRatio = todos.length ? Math.round((completedCount / todos.length) * 100) : 0;
  const hasTodos = todos.length > 0;
  const hasCompleted = completedCount > 0;
  const allCompleted = hasTodos && remainingCount === 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      {
        id: Date.now(),
        text: trimmed,
        completed: false,
        createdAt: Date.now()
      },
      ...prev
    ]);
    setText('');
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditingText('');
      setEditingOriginalText('');
    }
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const toggleAll = () => {
    if (!hasTodos) return;

    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        completed: !allCompleted
      }))
    );
  };

  const clearAll = () => {
    setTodos([]);
    setEditingId(null);
    setEditingText('');
    setEditingOriginalText('');
  };

  const startEditing = (id: number, value: string) => {
    setEditingId(id);
    setEditingText(value);
    setEditingOriginalText(value);
    cancellingEditRef.current = false;
  };

  const resetEditingState = () => {
    setEditingId(null);
    setEditingText('');
    setEditingOriginalText('');
  };

  const commitEdit = () => {
    if (editingId === null) return;

    const trimmed = editingText.trim();
    const textToPersist = trimmed.length > 0 ? trimmed : editingOriginalText;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === editingId ? { ...todo, text: textToPersist } : todo))
    );
    resetEditingState();
  };

  const cancelEdit = () => {
    cancellingEditRef.current = true;
    resetEditingState();
    setTimeout(() => {
      cancellingEditRef.current = false;
    }, 0);
  };

  const handleEditBlur = () => {
    if (cancellingEditRef.current) {
      cancellingEditRef.current = false;

      return;
    }

    commitEdit();
  };

  const handleEditKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      commitEdit();
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      cancelEdit();
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          <div className="play-description !justify-center !text-align-center">
            <h2>Simple Todo App</h2>
            <p>
              Track what needs to be tackled next. Add todos, toggle their completion state, edit
              existing items, and quickly clear the finished work.
            </p>
          </div>
          <div className="todo-app">
            <form className="todo-form" onSubmit={handleSubmit}>
              <input
                aria-label="Todo description"
                placeholder="Add a new task..."
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
              <button type="submit">Add</button>
            </form>

            <div className="todo-toolbar">
              <div className="todo-status">
                <span className="todo-count">
                  {remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} left
                </span>
                {hasTodos && <span className="todo-progress">{completionRatio}% complete</span>}
              </div>
              <div className="todo-filters">
                <button
                  aria-pressed={filter === 'all'}
                  className={filter === 'all' ? 'active' : ''}
                  type="button"
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button
                  aria-pressed={filter === 'active'}
                  className={filter === 'active' ? 'active' : ''}
                  type="button"
                  onClick={() => setFilter('active')}
                >
                  Active
                </button>
                <button
                  aria-pressed={filter === 'completed'}
                  className={filter === 'completed' ? 'active' : ''}
                  type="button"
                  onClick={() => setFilter('completed')}
                >
                  Completed
                </button>
              </div>
              <div className="todo-actions ">
                <button
                  aria-disabled={!hasTodos}
                  disabled={!hasTodos}
                  type="button"
                  onClick={toggleAll}
                >
                  {allCompleted ? 'Mark all active' : 'Mark all done'}
                </button>
                <button
                  aria-disabled={!hasCompleted}
                  disabled={!hasCompleted}
                  type="button"
                  onClick={clearCompleted}
                >
                  Clear completed
                </button>
                <button
                  aria-disabled={!hasTodos}
                  disabled={!hasTodos}
                  type="button"
                  onClick={clearAll}
                >
                  Clear all
                </button>
              </div>
            </div>

            <ul className="todo-list">
              {visibleTodos.length === 0 && (
                <li className="todo-empty">Nothing to show here yet.</li>
              )}
              {visibleTodos.map((todo) => {
                const isEditing = editingId === todo.id;

                return (
                  <li
                    className={`todo-item${
                      todo.completed ? ' completed' : ''
                    }${isEditing ? ' editing' : ''}`}
                    key={todo.id}
                  >
                    <label className="todo-item-main">
                      <input
                        aria-label={
                          todo.completed
                            ? `Mark "${todo.text}" as active`
                            : `Mark "${todo.text}" as done`
                        }
                        checked={todo.completed}
                        type="checkbox"
                        onChange={() => toggleTodo(todo.id)}
                      />
                      {isEditing ? (
                        <input
                          aria-label="Edit todo text"
                          className="todo-edit-input"
                          ref={editInputRef}
                          value={editingText}
                          onBlur={handleEditBlur}
                          onChange={(event) => setEditingText(event.target.value)}
                          onKeyDown={handleEditKeyDown}
                        />
                      ) : (
                        <span>{todo.text}</span>
                      )}
                    </label>
                    <div className="todo-item-actions">
                      {isEditing ? (
                        <>
                          <button
                            type="button"
                            onClick={commitEdit}
                            onMouseDown={(event) => event.preventDefault()}
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={cancelEdit}
                            onMouseDown={(event) => event.preventDefault()}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button type="button" onClick={() => startEditing(todo.id, todo.text)}>
                            Edit
                          </button>
                          <button
                            aria-label={`Delete "${todo.text}"`}
                            className="todo-delete"
                            type="button"
                            onClick={() => removeTodo(todo.id)}
                          >
                            X
                          </button>
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleTodoApp;
