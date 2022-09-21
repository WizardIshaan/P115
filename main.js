
function preload()
{

}


function setup()
{
 canvas = createCanvas(640,480);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(600, 600);  
 video.hide();
   
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

  function modelLoaded()
  {
     console.log('PoseNet is initialized');
  }

  function gotPoses(results)
  {
      if(results.length > 0)
      {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
      }
  }

function draw()
{
  image(video, 150, 150, 450, 450);
}


function TakePhoto()
{
  save('Image.png');
}















