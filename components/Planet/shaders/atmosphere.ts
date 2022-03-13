import { Shaders, Node, GLSL } from "gl-react";

export const shaders = Shaders.create({
    vertex: {
      frag: GLSL`
        void main() {
          gl_Position = vec4(1, 0, 0, 1);
        }
      `
    },
    atmFragment: {
        frag: GLSL`
        varying vec3 vertexNormal;
        void main() {
            float intensity = pow(0.5 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
          )
        }
      `
    },
    atm: {
        frag: GLSL`
            varying vec2 vertexUV;
            varying vec3 vertexNormal;
            void main() {
                vertexUV = uv;
                vertexNormal = normal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4 * (
                    position, 1.0 );
                )
            )
          }
        `
    },
});