(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    /*****house******/
    ctx.fillStyle = 'rgb(151, 91, 91)';
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = '2';

    //house ceiling
    var a = new Point(474, 163);
    var b = new Point(763, 163);
    var c = new Point(618, 3);
    drawTriangle(a, b, c, ctx);

    ctx.beginPath();
    ctx.moveTo(674, 121);
    ctx.lineTo(674, 41);
    ctx.lineTo(714, 41);
    ctx.lineTo(714, 121);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(714, 82);
    ctx.save();
    ctx.scale(1, 0.5);
    ctx.arc(694, 82, 20, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    //house body
    var width = b.x - a.x;
    var height = 215;
    ctx.strokeRect(a.x, a.y, width, height);
    ctx.fillRect(a.x, a.y, width, height);

    //house door 
    ctx.beginPath();
    ctx.moveTo(505, 377);
    ctx.lineTo(505, 300);
    ctx.save();
    ctx.scale(1, 0.5);
    ctx.arc(545, 600, 40, Math.PI, 0, false);
    ctx.restore();
    ctx.moveTo(585, 300);
    ctx.lineTo(585, 377);
    ctx.moveTo(545, 377);
    ctx.lineTo(545, 280);
    ctx.moveTo(540, 350);
    ctx.arc(535, 350, 5, 0, Math.PI * 2);
    ctx.moveTo(560, 350);
    ctx.arc(555, 350, 5, 0, Math.PI * 2);
    ctx.stroke();

    //windows
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.strokeStyle = 'rgb(151, 91, 91)';
    drawWindow(494, 188, 100, 65, ctx);
    drawWindow(636, 188, 100, 65, ctx);
    drawWindow(636, 281, 100, 65, ctx);


    /*****HatMan*****/
    //face arc
    ctx.fillStyle = 'rgb(144,202,205)';
    ctx.strokeStyle = 'rgb(25,75,85)';
    ctx.beginPath();
    ctx.moveTo(125, 200 + (200 * 0.1));
    ctx.save();
    ctx.scale(1, 0.9);
    ctx.arc(125, 200 + (200 * 0.1), 75, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //eyes
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(70, 175);
    ctx.scale(1, 0.8);
    ctx.arc(82.5, 175 * 1.25, 12.5, Math.PI, Math.PI * 3);
    ctx.moveTo(112.5, 175 * 1.25);
    ctx.arc(125, 175 * 1.25, 12.5, Math.PI, Math.PI * 3.5);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.scale(0.5, 1);
    ctx.moveTo(133 * 1.8, 167 + 7.5);
    ctx.arc(133 * 1.8, 167 + 7, 8, 0, 8);

    ctx.moveTo(78 * 2, 167 + 7.5);
    ctx.arc(78 * 2, 167 + 7, 8, 0, 8);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    //nose
    ctx.beginPath();
    ctx.moveTo(100, 175);
    ctx.lineTo(85, 205);
    ctx.lineTo(100, 205);
    ctx.stroke();

    //mouth
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(135, 230);
    ctx.scale(1, 0.4);

    ctx.arc(108.5, 230 + 1.5 * 230, 27, 0, 3 * Math.PI);
    ctx.stroke();
    ctx.restore();

    //hat
    ctx.save(); //starts
    ctx.lineWidth = 5;

    ctx.fillStyle = 'rgb(55, 100, 145)';
    ctx.strokeStyle = 'rgb(0 ,0 ,0)';
    ctx.translate(120, 140);
    ctx.beginPath();
    ctx.scale(1, 0.2);
    ctx.moveTo(80, 0);
    ctx.arc(0, 0, 80, 0, Math.PI * 2);

    ctx.translate(10, -60);
    ctx.moveTo(50, 0);
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.scale(1, 5);
    ctx.fillRect(-50, -100, 100, 101);

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-50, 0);
    ctx.lineTo(-50, -100);
    ctx.moveTo(50, -100);
    ctx.lineTo(50, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.translate(0, -100);
    ctx.scale(1, 0.2);
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();


    /******bicycle*****/

    //tyres
    ctx.fillStyle = 'rgb(145, 200, 215)';
    ctx.strokeStyle = 'rgb(50, 125, 145)';
    ctx.beginPath();
    //left
    ctx.moveTo(120, 420);
    ctx.arc(60, 420, 60, 0, Math.PI * 2);
    //right
    ctx.moveTo(350, 420);
    ctx.arc(290, 420, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    //frame
    ctx.beginPath();
    ctx.moveTo(60, 420);
    ctx.lineTo(165, 415);
    ctx.lineTo(275, 345);
    ctx.lineTo(130, 345);
    ctx.lineTo(60, 420);
    ctx.moveTo(165, 415);
    ctx.lineTo(115, 315);

    //seat
    ctx.lineTo(90, 315);
    ctx.lineTo(140, 315);

    //steering
    ctx.moveTo(285, 415);
    ctx.lineTo(270, 300);
    ctx.lineTo(220, 315);
    ctx.moveTo(270, 300);
    ctx.lineTo(300, 265);

    //front pignon
    ctx.moveTo(180, 415);
    ctx.arc(165, 415, 15, 0, 8);
    ctx.moveTo(154, 405);
    ctx.lineTo(140, 390);
    ctx.moveTo(175, 425);
    ctx.lineTo(188, 439);
    ctx.stroke();

    //hatMan body
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.moveTo(115, 310);
    ctx.lineTo(180, 369);
    ctx.lineTo(188, 439);
    ctx.moveTo(140, 390);
    ctx.lineTo(187, 311);
    ctx.lineTo(115, 310);
    ctx.lineTo(122, 262);
    ctx.lineTo(220, 315);
    ctx.moveTo(300, 265);
    ctx.lineTo(167, 251);
    ctx.lineTo(115, 310);
    ctx.stroke();

})()

function Point(x, y) {
    this.x = x; 
    this.y = y;
}

function drawTriangle (A, B, C, ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.lineTo(A.x, A.y);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}

function drawWindow(x, y, width, height, ctx) {
    ctx.fillRect(x, y, width, height);
    ctx.beginPath();
    ctx.moveTo(x, y + (height / 2));
    ctx.lineTo(x + width, y + (height / 2));
    ctx.moveTo(x + (width / 2), y);
    ctx.lineTo(x + (width / 2), y + height);
    ctx.stroke();
}