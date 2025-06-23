<script>
  import { string } from 'zod';
  //preload images from the static folder

  import Section from '../lib/components/Artist/PageSection.svelte';
  //import images from './static/images/eyesFilled3/'

  //import style from './style.css';
  import './style.css';

  
</script>



    <div class="mainContainer">

        <div class="frame2"> 

                    <div class="vertical-Bars">
            <div class="vertical-bar-top" style = "width:4%;left:5%"></div>
            <div class="vertical-bar-top" style = "width:3%;left:15%"></div>

            <div class="vertical-bar-top" style = "width:3%;left: 80%"></div>
            <div class="vertical-bar-bottom" style = "width:5%;left: 1%"></div>
             <div class="vertical-bar-bottom" style = "width:5%;left: 15%"></div>
             <div class="vertical-bar-bottom" style = "width:2%;left: 12%"></div>
            <!-- <div class="vertical-bar-bottom" style = "width:5%;left: 5%"></div> -->
            <div class="vertical-bar-bottom" style = "width:5%;right: 5%"></div>


            
        </div>
        <div class=" horizontal-bars">
            <div class="horizontal-bar-left" style="top:2%; height:4%"></div>
            <div class="horizontal-bar-left" style="top:8%; height:5%"></div>
            <div class="horizontal-bar-left" style="top:15%; height:5%"></div>
            <div class="horizontal-bar-left" style="top:23%; height:5%"></div>
            <div class="horizontal-bar-right" style="top:60%; height:4%"></div>
            <div class="horizontal-bar-right" style="top:73%; height:3%"></div>
           <div class="horizontal-bar-right" style="top:80%; height:3%"></div>

        </div>

            <div class="title" aria-label="Main Title Section">
        <div class="titleText" aria-label="Title Text"></div>
        <div class="subtitleText" aria-label="Subtitle Text"></div>
    </div>

    <div class="animationsContainer">
          <!-- <canvas class="circleAnimation" id="circleAnimationCanvas" width="200" height="200"></canvas> -->
    <div class="circleAnimation"></div>
          <div id="iconsAnimation"></div>

    <!-- <canvas class="starAnimation" id="starAnimationCanvas" width="120" height="120"></canvas> -->
    <div class="starAnimation"></div>

    <canvas class="eyeAnimation" id="eyeAnimationCanvas" width="200" height="200"></canvas>
    
    <div class="irisAnimation"></div>

    </div>
    <div class="buttonsContainer" aria-label="Main Action Buttons" role="group">
      <a href="/game-map">
      <div class="button start" aria-label="Start Button" tabindex="0" role="button" 
           aria-describedby="start-desc"
           on:click={() => handleButtonClick('Start')}
           on:keydown={(e) => (e.key === ' ' || e.key === 'Enter') && handleButtonClick('Start')}></div>
           </a>
      <span id="start-desc" class="visually-hidden">Press to start the main activity</span>
      <a href = "/about">
      <div class="button tutorial" aria-label="Tutorial Button" tabindex="0" role="button"
           aria-describedby="tutorial-desc"
           on:click={() => handleButtonClick('Tutorial')}
           on:keydown={(e) => (e.key === ' ' || e.key === 'Enter') && handleButtonClick('Tutorial')}>
          </div>
        </a>
        <span id="tutorial-desc" class="visually-hidden">Press to view the tutorial</span>

      <a href="world-map">
      <div class="button luck" aria-label="Try Your Luck Button" tabindex="0" role="button"
           aria-describedby="luck-desc"
           on:click={() => handleButtonClick('Luck')}
           on:keydown={(e) => (e.key === ' ' || e.key === 'Enter') && handleButtonClick('Luck')}></div>
          </a>
      <span id="luck-desc" class="visually-hidden">Press to try your luck</span>
    </div>
        </div>

                       <div class="phases" aria-label="Phases"></div>

    <div class="leftBalls"></div>
    <div class="rightBalls"></div>

        
    

    </div>
    <div class="grainTexture"></div>

    
<!-- <script src="script.js"></script> -->


