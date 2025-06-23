 const eyeAnimationLength = 5000;
    // const starAnimationLength = 1500;

    //the size of the canvas with the class frame is 100 % of the window size
    let frameCanvas = document.querySelectorAll('.frame');
    frameCanvas.forEach((c) => {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    })
    renderFrame();
    //on resize the canvas size is updated
    window.addEventListener('resize', () => {
        frameCanvas.forEach((c) => {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
        });
        renderFrame();
    });

    //render the canvas with the image './images/boarder-big.svg' and stretch to the canvas size 90% 
    function renderFrame() {
    const frameImage = new Image();
    frameImage.src = './images/boarder-big.svg';
    frameImage.onload = () => {
        frameCanvas.forEach((c) => {
            const ctx = c.getContext('2d');
            const aspectRatio = frameImage.width / frameImage.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (aspectRatio > c.width / c.height) {
                drawWidth = c.width * 0.9; // 90% of canvas width
                drawHeight = drawWidth / aspectRatio;
                offsetX = (c.width - drawWidth) / 2;
                offsetY = (c.height - drawHeight) / 2;
            } else {
                drawHeight = c.height * 0.9; // 90% of canvas height
                drawWidth = drawHeight * aspectRatio;
                offsetX = (c.width - drawWidth) / 2;
                offsetY = (c.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(frameImage, offsetX, offsetY, drawWidth, drawHeight);
        });
    };
}
        
    
    // Array of image paths for each frame
    const frames = [];
    for (let i = 1; i <= 24; i++) {
        frames.push(`./images/eyesFilled3/eyes_${i}.svg`);
    }

    const canvas = document.getElementById('eyeAnimationCanvas');
    const ctx = canvas.getContext('2d');
    const frameCount = frames.length;
    const frameDuration = eyeAnimationLength / frameCount; // 3s animation, 16 frames

    // Preload images
    const images = [];
    let loaded = 0;
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = frames[i];
        img.onload = () => {
            loaded++;
            if (loaded === frameCount) startAnimation();
        };
        images.push(img);
    }

    function startAnimation() {
        let startTime = null;
        function animateEye(ts) {
            if (!startTime) startTime = ts;
            const elapsed = (ts - startTime) % eyeAnimationLength;
            const frameIdx = Math.floor(elapsed / frameDuration);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw the image centered without stretching (preserve aspect ratio)
            const img = images[frameIdx];
            const imgAspect = img.width / img.height;
            const canvasAspect = canvas.width / canvas.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgAspect > canvasAspect) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgAspect;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawHeight = canvas.height;
                drawWidth = canvas.height * imgAspect;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            requestAnimationFrame(animateEye);
        }
        // requestAnimationFrame(animateEye);
        // Start the animation
    }

    
    // const starFrames = [];
    // for (let j = 1; j <= 13; j++) {
    //     starFrames.push(`./images/starAnimation2/star4_${j}.svg`);
    // }


    // const starCanvas = document.getElementById('starAnimationCanvas');
    // const starCtx = starCanvas.getContext('2d');
    // const starFrameCount = starFrames.length;
    // const starFrameDuration = starAnimationLength / starFrameCount; // 3s animation, 16 frames



    // const starImages = [];
    // let starLoaded = 0;
    // for (let j = 0; j < starFrameCount; j++) {
    //     const img = new Image();
    //     img.src = starFrames[j];
    //     img.onload = () => {
    //         starLoaded++;
    //         if (starLoaded === starFrameCount) starStartAnimation();
    //     };
    //     starImages.push(img);
    // }

    // function starStartAnimation() {
    //     let startTime = null;
    //     function animateStar(ts) {
    //         if (!startTime) startTime = ts;
    //         const elapsed = (ts - startTime) % starAnimationLength;
    //         const frameIdx = Math.floor(elapsed / starFrameDuration);
    //         starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    //         // Draw the image centered without stretching (preserve aspect ratio)
    //         const img = starImages[frameIdx];
    //         const imgAspect = img.width / img.height;
    //         const canvasAspect = starCanvas.width / starCanvas.height;
    //         let drawWidth, drawHeight, offsetX, offsetY;

    //         if (imgAspect > canvasAspect) {
    //             drawWidth = starCanvas.width;
    //             drawHeight = starCanvas.width / imgAspect;
    //             offsetX = 0;
    //             offsetY = (starCanvas.height - drawHeight) / 2;
    //         } else {
    //             drawHeight = starCanvas.height;
    //             drawWidth = starCanvas.height * imgAspect;
    //             offsetX = (starCanvas.width - drawWidth) / 2;
    //             offsetY = 0;
    //         }

    //         starCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    //         requestAnimationFrame(animateStar);
    //     }
    //     requestAnimationFrame(animateStar);
    //     // Start the animation
    // }


    
    // Circle animation setup
    // const circleFrames = [];
    // for (let k = 1; k <= 12; k++) {
    //     circleFrames.push(`./images/circleAnimation2/batch_layer ${k}.svg`);
    // }

    // const circleCanvas = document.getElementById('circleAnimationCanvas');
   
 
  

    // const circleCtx = circleCanvas.getContext('2d');
    // const circleFrameCount = circleFrames.length;
    // const circleAnimationLength = 5000; // 3 seconds
    // const circleFrameDuration = circleAnimationLength / circleFrameCount;

    // const circleImages = [];
    // let circleLoaded = 0;
    // for (let k = 0; k < circleFrameCount; k++) {
    //     const img = new Image();
    //     img.src = circleFrames[k];
    //     img.onload = () => {
    //         circleLoaded++;
    //         if (circleLoaded === circleFrameCount) circleStartAnimation();
    //     };
    //     circleImages.push(img);
    // }

    // function circleStartAnimation() {
    //     let startTime = null;
    //     function animateCircle(ts) {
    //         if (!startTime) startTime = ts;
    //         const elapsed = (ts - startTime) % circleAnimationLength;
    //         const frameIdx = Math.floor(elapsed / circleFrameDuration);
    //         circleCtx.clearRect(0, 0, circleCanvas.width, circleCanvas.height);
    //         // Draw the image centered without stretching (preserve aspect ratio)
    //         const img = circleImages[frameIdx];
    //         const imgAspect = img.width / img.height;
    //         const canvasAspect = circleCanvas.width / circleCanvas.height;
    //         let drawWidth, drawHeight, offsetX, offsetY;

    //         if (imgAspect > canvasAspect) {
    //             drawWidth = circleCanvas.width;
    //             drawHeight = circleCanvas.width / imgAspect;
    //             offsetX = 0;
    //             offsetY = (circleCanvas.height - drawHeight) / 2;
    //         } else {
    //             drawHeight = circleCanvas.height;
    //             drawWidth = circleCanvas.height * imgAspect;
    //             offsetX = (circleCanvas.width - drawWidth) / 2;
    //             offsetY = 0;
    //         }
    //         // circleCtx?.drawImage(img, offsetX, offsetY, circleCanvas.width, circleCanvas.height);

    //         circleCtx?.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    //         requestAnimationFrame(animateCircle);
    //     }
    //     requestAnimationFrame(animateCircle);
    // }