import React from 'react'
import { useState, useEffect } from 'react'
import GalleryAPI from './GalleryAPI'


export default function Gallery() {
	const [data, setData] = useState(GalleryAPI)
	const [ourText, setOurText] = useState("Welcome to this Play, Click on the Images and get to know about it.")
	const [midText, setMidText] = useState("Sorry for interrupting. I think you like this play. Don't forget to give it a thumbs up.")
	const msg = new SpeechSynthesisUtterance()
	var voiceName = "Zira"

	const filterResult = (catItem) => {
		const result = GalleryAPI.filter((currentData) => {
			speechHandler(msg)
			return currentData.type === catItem;
		});
	}
	const speechHandler = (msg) => {
		msg.text = ourText
		//This for loop help us to give the female voice
		for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
			if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) !== -1) {
				msg.voice = window.speechSynthesis.getVoices()[i];
			}
		}
		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(msg)
	}
	function sayAboutImage() {
		speechHandler(msg)
	}

	useEffect(() => {
		setTimeout(() => {
			setOurText(midText)
		}, 40000);
	}, [])

	setTimeout(() => {
		speechHandler(msg)
	}, 6);

	return (
		<>
			{/* FInal Grid */}

			<div className='heading-gallery'>Do You Know the Image?</div>
			<div class="gallery-image"  >
				{data.map((values) => {
					const { url, type, discription, title, videoUrl } = values
					return (
						<>
							<div class="gallery-img-box" onMouseUp={() => setOurText(discription)}>
								<img src={url} alt="galleryImage" className='gallery-grid-image' onClick={() => filterResult(type)} />
								<video autoPlay loop className='gallery-video'>
									<source src={videoUrl} />
								</video>

								<div class="transparent-box">
									<div class="caption">
										<p>{title}</p>
										<button class="opacity-low" onClick={sayAboutImage}>Know Me</button>
									</div>
								</div>
							</div>
						</>
					)
				})}

			</div>
			<div>
				<button class="custom-btn gallery-btn" onClick={() => setOurText("More images will add soon, and till then, explore the rest of them.")}><span>More...</span></button>
			</div>
		</>
	)
}
