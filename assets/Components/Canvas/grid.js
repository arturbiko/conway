
export default function draw(canvas, fieldAmount) {
    const width = canvas.width;
    const height = canvas.height;

    const step = Math.floor(width / fieldAmount);
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#060310';
    ctx.lineWidth = 1;

    ctx.clearRect(0, 0, width, height)
    ctx.beginPath();

    let x = step;
    while (x < canvas.width) {
        ctx.moveTo(x + 0.5, 0.5);
        ctx.lineTo(x + 0.5, height + 0.5);
        ctx.stroke();

        x += step;
    }

    ctx.beginPath();

    let y = step;
    while (y < canvas.height) {
        ctx.moveTo(0.5, y + 0.5);
        ctx.lineTo(width + 0.5, y + 0.5);
        ctx.stroke();

        y += step;
    }
}
