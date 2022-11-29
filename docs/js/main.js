window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    function drawCanvas(id) {
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext(`2d`, {alpha:true, colorSpace:'srgb', desynchronized:false, willReadFrequently:true});
        const imageData = ctx.createImageData(100, 100);
        for (let x = 0; x < 100; x+=2) {
            for (let y = 0; y < 100; y+=2) {
                if (0 == ((x+y) % 2)) {
                    dot(imageData, x,y, 0,0,255,255)
                }
            }
        }
        ctx.putImageData(imageData, 20, 20);
    }
    function dot(imageData, x, y, r, g, b, a) { // 点を打つ（指定した座標x,yに指定した色rgbaの）
        imageData.data[(x + y * imageData.width) * 4] = r
        imageData.data[(x + y * imageData.width) * 4 + 1] = g
        imageData.data[(x + y * imageData.width) * 4 + 2] = b
        imageData.data[(x + y * imageData.width) * 4 + 3] = a
    }
    drawCanvas(`canvas`)

    function download() {
        const canvas = document.getElementById('canvas')
        const a = document.createElement('a')
        a.href = canvas.toDataURL()
        a.download = 'canvas.png'
        a.click()
    }
    document.getElementById('download').addEventListener('click', async(event) => { download() })
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

