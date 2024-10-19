import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

import Lights from './Lights/light.jsx';
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
                <color attach="background" args={['#111111']} />
                <Perf position={'top-left'} />
                <CameraControls />
                <Lights />
                <group>
                    <Car />
                    <Road />
                    <Lamp />
                    <Bench />
                    <Railing />
                    <Tree />
                </group>
            </Canvas>
        </>
    );
};

export default Experience;
