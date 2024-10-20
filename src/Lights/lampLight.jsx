import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// eslint-disable-next-line react/prop-types
const LampLight = ({ light }) => {
    const light2 = useRef();
    const light3 = useRef();
    const light4 = useRef();
    const light5 = useRef();
    const light6 = useRef();

    useHelper(light, THREE.PointLightHelper, 0.5);
    useHelper(light2, THREE.PointLightHelper, 0.5);
    useHelper(light3, THREE.PointLightHelper, 0.5);
    useHelper(light4, THREE.PointLightHelper, 0.5);
    useHelper(light5, THREE.PointLightHelper, 0.5);
    useHelper(light6, THREE.PointLightHelper, 0.5);

    return (
        <group>
            {/* main light */}
            <pointLight
                ref={light}
                position={[-4.03, 4, -3.16]}
                intensity={1.5} // Increased intensity for better illumination
                decay={1.2} // Tweaked decay to control fade in fog
                distance={15} // Increased distance for more reach
                color={'#fdca65'} // Warm street lamp color, adjusted slightly
                castShadow
                shadow-mapSize={[2048, 2048]} // High shadow resolution
                shadow-radius={3} // Softer shadow radius
            />
            {/* front tree side light */}
            <pointLight
                ref={light2}
                position={[-4.03, 4, 8.0]}
                intensity={1.5} // Increased intensity for better illumination
                decay={0.75} // Tweaked decay to control fade in fog
                distance={15} // Increased distance for more reach
                color={'#f6dfb2'} // Warm street lamp color, adjusted slightly
                castShadow
                shadow-mapSize={[2048, 2048]} // High shadow resolution
                shadow-radius={3} // Softer shadow radius
            />
            {/* back tree side light */}
            <pointLight
                ref={light3}
                position={[-4.03, 4, -14.16]}
                intensity={3} // Increased intensity for better illumination
                decay={0.75} // Tweaked decay to control fade in fog
                distance={15} // Increased distance for more reach
                color={'#f6dfb2'} // Warm street lamp color, adjusted slightly
                castShadow
                shadow-mapSize={[2048, 2048]} // High shadow resolution
                shadow-radius={3} // Softer shadow radius
            />
            {/* back opposit tree side light */}
            <pointLight
                ref={light4}
                position={[7, 4, -8]}
                intensity={1.5} // Increased intensity for better illumination
                decay={0.7} // Tweaked decay to control fade in fog
                distance={15} // Increased distance for more reach
                color={'#b0d4f8'} // Warm street lamp color, adjusted slightly
                castShadow
                shadow-mapSize={[2048, 2048]} // High shadow resolution
                shadow-radius={3} // Softer shadow radius
            />
            {/* front opposit tree side light */}
            <pointLight
                ref={light5}
                position={[7, 4, 2]}
                intensity={2} // Increased intensity for better illumination
                decay={0.7} // Tweaked decay to control fade in fog
                distance={15} // Increased distance for more reach
                color={'#b0d4f8'} // Warm street lamp color, adjusted slightly
                castShadow
                shadow-mapSize={[2048, 2048]} // High shadow resolution
                shadow-radius={3} // Softer shadow radius
            />

            {/* middle opposit tree side light */}
            <pointLight
                ref={light6}
                position={[10, 8, -3]}
                intensity={2} // Increased intensity for better illumination
                decay={0.55} // Tweaked decay to control fade in fog
                distance={20} // Increased distance for more reach
                color={'#fcbc68'} // Warm street lamp color, adjusted slightly
                castShadow
                shadow-mapSize={[2048, 2048]} // High shadow resolution
                shadow-radius={3} // Softer shadow radius
            />


        </group>
    );
};

export default LampLight;
