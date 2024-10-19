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
                intensity={1.5} // Increased intensity for better illumination
                decay={1.2} // Tweaked decay to control fade in fog
                distance={15} // Increased distance for more reach
                color={"#ffcc66"} // Warm street lamp color, adjusted slightly
                castShadow
                shadow-mapSize={[2048, 2048]} // High shadow resolution
                shadow-radius={3} // Softer shadow radius
            />
        </group>
    );
};

export default LampLight;
