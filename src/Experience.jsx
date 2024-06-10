import { CameraControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Perf } from 'r3f-perf';

import Bench from './models/Bench.jsx';
import Car from './models/Car.jsx';
import Lamp from './models/Lamp.jsx';
import Railing from './models/Railing.jsx';
import Road from './models/Road.jsx';
import Tree from './models/Tree.jsx';

const Experience = () => {
    return (
        <>
            <Canvas camera={{ fov: 25, position: [35, 20, 30] }}>
                <color attach="background" args={['#0f0f0f']} />
                <Perf position={'top-left'} />
                <CameraControls />
                <ambientLight intensity={0.3} />
                <Environment preset="night" />
                {/* <EffectComposer disableNormalPass> */}

                {/* <Bloom luminanceThreshold={3} mipmapBlur intensity={0.5}/> */}

                <group>
                    <Car />
                    <Road />
                    <Lamp />
                    <Bench />
                    <Railing />
                    <Tree />
                </group>
                {/* </EffectComposer> */}
            </Canvas>
        </>
    );
};

export default Experience;
