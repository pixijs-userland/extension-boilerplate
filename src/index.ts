import { Rectangle } from 'pixi.js';

// PixiJS uses a special global type object called PixiMixins
// this can be used to add methods to existing PixiJS classes.
declare global
{
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace PixiMixins
    {
        interface Rectangle
        {
            expand(amount: number): this;
        }
    }
}

/**
 * PixiJS's Rectangle class.
 * @class Rectangle
 * @see https://pixijs.download/main/docs/maths.Rectangle.html
 */

/**
 * Example of a utility function that can be added to PixiJS's Rectangle class.
 * This function expands the rectangle by the given amount. Can also be used
 * to contract the Rectangle.
 *
 * @method expand
 * @memberof Rectangle
 * @example
 * import { Rectangle } from 'pixi.js';
 * const rect = new Rectangle(0, 0, 100, 100);
 * rect.expand(10);
 * @param {number} amount - The amount to expand (if greater than 0) or contract (if less than 0)
 * @return {Rectangle} Instance for chaining.
 */
Rectangle.prototype.expand = function expand(this: Rectangle, amount: number): Rectangle
{
    this.x -= amount;
    this.y -= amount;
    this.width += amount * 2;
    this.height += amount * 2;

    return this;
};

export { Rectangle };
