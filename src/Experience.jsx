import { CameraControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

import Car from './models/car';
import Grass from './models/grass';
import Lamp from './models/Lamp';
import Road from './models/road';

const Experience = () => {
    return (
        <>
            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                <ambientLight intensity={2} />
                <Environment preset={'city'} />
                <Perf position={'top-left'} />
                <CameraControls />
                <group>
                    <Car />
                    <Road />
                    <Lamp />
                    <Grass />
                </group>
            </Canvas>
        </>
    );
};

export default Experience;
