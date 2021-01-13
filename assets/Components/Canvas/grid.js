
export default function draw(canvas, fieldAmount) {
    const width = canvas.width;
    const height = canvas.height;

    const step = Math.floor(width / fieldAmount);
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;

    ctx.beginPath();

    let x = step;
    while (x < canvas.width) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();

        x += step;
    }

    ctx.beginPath();

    let y = step;
    while (y < canvas.height) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        y += step;
    }
}
