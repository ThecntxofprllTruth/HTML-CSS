class BarChart{
    /**
     * The canvas on which the chart will be displayed
     */
    #canvas; // # = atribut privat
    /**
     * Creates a new chart instance
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas){
        this.#canvas = canvas;
    }
    /**
     * 
     * @param {Array<Number>} values 
     */
    draw(values){
        const context = this.#canvas.getContext('2d');
        
        const barWidth = this.#canvas.width / values.length;

        const maxValue = Math.max(...values);
        const f = this.#canvas.height / maxValue;
        
        for(let i = 0; i < values.length; i++)
        {
            const barX = i * barWidth;

            const barY = this.#canvas.height - barHeight;

            const barHeight = values[i] * f;
            
            context.fillRect(barX, barY, barWidth, barHeight);

        }   
    }
}