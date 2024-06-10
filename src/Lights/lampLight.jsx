import { useHelper } from '@react-three/drei';
import * as THREE from 'three';

// eslint-disable-next-line react/prop-types
const LampLight = ({ light }) => {
    useHelper(light, THREE.PointLightHelper, 0.5);

    return (
        <group>
            <pointLight
                ref={light}
                position={[-4.03, 4, -3.16]}
                intensity={4}
                decay={0.95}
            />
        </group>
    );
};

export default LampLight;
