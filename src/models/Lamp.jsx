import { useGLTF } from '@react-three/drei';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
// import { GaussianBlurPass } from 'postprocessing';
import { useRef } from 'react';

import LampLight from '../Lights/lampLight';

const Lamp = (props) => {
    const { nodes, materials } = useGLTF('./assets/lamp.glb');
    const lampGlass = useRef();

    const light = useRef();

    // console.log(nodes);
    return (
        <group {...props} dispose={null}>
            <EffectComposer disableNormalPass>
                <SelectiveBloom
                    lights={[light]}
                    mipmapBlur
                    luminanceThreshold={1.8}
                    luminanceSmoothing={0.25}
                    selection={[lampGlass]}
                />
                {/* <GodRays sun={lampGlass} blendFunction={BlendFunction.Screen} blur={true}/> */}
                {/* <Bloom luminanceThreshold={3} mipmapBlur intensity={0.5}/> */}
            </EffectComposer>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.street_lamp.geometry}
                material={materials.street_lamp_01}
            />
            <mesh
                ref={lampGlass}
                castShadow
                receiveShadow
                geometry={nodes.street_lamp_glass.geometry}
            >
                <meshBasicMaterial color={[2.0, 2.0, 2.0]} />
            </mesh>
            <LampLight light={light} />
        </group>
    );
};

useGLTF.preload('./assets/lamp.glb');
export default Lamp;
