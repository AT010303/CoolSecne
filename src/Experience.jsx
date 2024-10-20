import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';

import Lights from './Lights/light.jsx';
import Bench from './models/Bench.jsx';
import Car from './models/Car.jsx';
import Lamp from './models/Lamp.jsx';
import Railing from './models/Railing.jsx';
import Tree from './models/Tree.jsx';
import Road from './Road/Road.jsx';

const Experience = () => {
    return (
        <>
            <Canvas camera={{ fov: 25, position: [15, 0, 10] }}>
                <color attach="background" args={['#111111']} />
                <Perf position={'top-left'} />
                <CameraControls />
                <Lights />
                <group position={[0, -3, 0]}>
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
