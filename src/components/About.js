import React from 'react'


function About(props) {
    return (
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <div>
            <h3 style={{ textAlign: 'center' }}><em>Free Online Word and Character Count Tool</em></h3>
            <p>Our online word count tool displays data for both words and characters at the same time allows you to easily toggle on/off whether you’d like spaces to be counted as characters.</p>  
        </div>
        <div>
            <h3 style={{ textAlign: 'center' }}><em>What are word counter and character counter?</em></h3>
            <p>There’sWhen you add your text to QuillBot’s Word Counter, our powerful platform instantly performs the mundane counting tasks for you, so you can see right where your word and character limits are sitting for your project.There’s no need to go crossed-eyed counting words or characters manually just to make sure you’re hitting your writing benchmarks or staying under harsh character limits. Your time is worth more than that—and so is your eyesight.
            </p>
        </div >
        <div >
            <h3 style={{ textAlign: 'center' }}><em>Who needs a word counter?</em></h3>
            <h4>Student:</h4>
            <p>Often in school or university students will be asked to write a 250-word short answer to a question to show their knowledge or a 2,000-word essay.
            Besides assignments, students applying for college and graduate school admissions will usually have a target word count for their application essays. Because of the large volume of applications each school receives, maximum word count limitations are usually also imposed.
            For example, a student may be asked for a ~1,000-word personal statement, but the fine print will note a hard limit of 2,000 words.
            </p>
            <h4>Writer:</h4>
            <p>Daily writing goals are important for the serious writer, even at the hobby level. Those looking to make writing a habit or hone their skills often choose to set a daily word count goal, like Neil Gaiman’s 50-words-per-day habit that, slowly but surely, helped him pen Coraline.
            </p>
        </div>
</div>
    )
}


export default About