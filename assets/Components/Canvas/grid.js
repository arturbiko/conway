
export default function draw(canvas, fieldAmount) {
    const width = canvas.width;
    const height = canvas.height;

    const step = Math.floor(width / fieldAmount);
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, width, height)

    ctx.beginPath();
    ctx.strokeStyle = '#060310';
    ctx.lineWidth = 1;

    for (let y = step; y < canvas.height; y += step) {
        for (let x = step; x < canvas.width; x+= step) {
            ctx.moveTo(x + 0.5, 0.5);
            ctx.lineTo(x + 0.5, height + 0.5);
        }

        ctx.moveTo(0.5, y + 0.5);
        ctx.lineTo(width + 0.5, y + 0.5);
    }

    ctx.stroke();
    ctx.closePath();
}
