import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {Bloom, EffectComposer } from '@react-three/postprocessing';
import { Perf } from 'r3f-perf';

import Car from './models/car';
// import Grass from './models/grass';
import Lamp from './models/Lamp';
import Road from './models/road';

const Experience = () => {
    return (
        <>
            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                <color attach="background" args={['#0f0f0f']} />
                <Perf position={'top-left'} />
                <CameraControls />
                <EffectComposer disableNormalPass multisampling={8}>
                
                {/* <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.5} intensity={2} /> */}
                </EffectComposer>
                <group>
                    <Car />
                    <Road />
                    <Lamp />
                    {/* <Grass /> */}
                </group>
            </Canvas>
        </>
    );
};

export default Experience;
