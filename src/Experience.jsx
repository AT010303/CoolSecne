import { CameraControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

import Car from './models/car';

const Experience = () => {
    return (
        <>
            <Canvas camera={{fov: 25}}>
                <ambientLight intensity={2} />
                <Environment preset={'city'} />
                <Perf position={'top-left'} />
                <CameraControls />
                <Car/>
            </Canvas>
        </>
    );
};

export default Experience;
