const chess = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

function draw(){
  let out = '';
  for(let i = 0; i < chess.length; i++){
    for(let j = 0; j < chess[i].length; j++){
      out += "<div class='chess-block'></div>";
      //console.log(out);
    }
  }
  document.querySelector('#field').innerHtml = out;
}

//const draw = draw();
module.exports = draw;
