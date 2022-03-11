import classes from './Background.module.sass'
import { useEffect, useRef, useState } from 'react'
import * as Matter from 'matter-js';
import { useSelector } from 'react-redux';
import { select } from '../../store/select';

const Background = () => {

    const scene = useRef<HTMLDivElement>(null);
    const engine = useRef(Matter.Engine.create())
    const intervalRef = useRef<NodeJS.Timer>();
    const [render, setRender] = useState<any>();

    const showCarousel = useSelector(select.view.showCarousel);

    const createBalls = () => {
        const ball = Matter.Bodies.circle(
            Math.floor(Math.random() * window.screen.width),
            0,
            Math.random() * 5,{
                mass: 0.5,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    fillStyle: "#fff"
                }
            }
        )
        Matter.World.add(engine.current.world, ball);
        setTimeout(() => {
            Matter.World.remove(engine.current.world, ball)
        }, 2000)
    }

    const starStarFall = () => {
        if (!scene.current) return;
        const cw = window.screen.width;
        const ch = window.screen.height;

        const render = Matter.Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: "transparent",
            }
        })

        Matter.World.add(engine.current.world, [
            Matter.Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true, render: {
                fillStyle: "#000"
            } }),
            Matter.Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
            Matter.Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
            Matter.Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
          ])

        Matter.Runner.run(engine.current)
        Matter.Render.run(render)

        intervalRef.current = setInterval(createBalls, 50);

        setRender(render)
    }

    const endStarFall = (render: any) => {
        Matter.Render.stop(render)
        Matter.World.clear(engine.current.world, false)
        Matter.Engine.clear(engine.current)
        render.canvas.remove()
        render.textures = {};
        intervalRef.current && clearInterval(intervalRef.current)
    }

    useEffect(() => {
  
        return () => {
            endStarFall(render)
        }

    }, [])

    useEffect(() => {
        if (showCarousel) {
            starStarFall()
        };
    }, [showCarousel])

    return (
        <div 
            ref={scene}
            className={classes.root}>
            
        </div>
    )
};

export default Background;