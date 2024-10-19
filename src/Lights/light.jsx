import { Environment, Lightformer } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Lights = () => {
    const { scene } = useThree();

    // Update fog settings to be more pronounced
    scene.fog = new THREE.Fog('#0a1a2a', 5, 50); // Adjusted start and end points for fog

    return (
        <>
            {/* Dim ambient light for a darker environment, emphasizing the lamp */}
            <ambientLight intensity={0.1} color={'#1a3b5a'} />
            
            {/* Hemisphere light for a subtle sky and ground glow */}
            <hemisphereLight
                intensity={0.2}
                skyColor={'#2a4f7c'}
                groundColor={'#1b1b1b'}
                position={[0, 50, 0]}
            />

            {/* Directional moonlight for minimal shadowing */}
            <directionalLight
                color="#8fa5ff"
                intensity={0.3}
                position={[5, 10, 5]}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-left={-15}
                shadow-camera-bottom={-15}
                shadow-camera-right={15}
                shadow-camera-top={15}
            />

            {/* Lightformers for ambient glow */}
            <Environment frames={1}>
                {/* Front */}
                <Lightformer
                    form="circle"
                    rotation-y={Math.PI / 2}
                    position={[-5, 3, 4]}
                    scale={[0.75, 0.75, 1]}
                    intensity={0.8}
                    color="#b0d0ff"
                />
                <Lightformer
                    rotation-y={Math.PI / 2}
                    position={[-5, 2, 1]}
                    scale={[0.5, 0.25, 1]}
                    intensity={0.5}
                    color="#6f87a1"
                />
                
                {/* Back */}
                <Lightformer
                    rotation-y={Math.PI / 2}
                    position={[5, 5, 5]}
                    scale={[0.5, 5, 1]}
                    intensity={0.3}
                    color="#c7d4ff"
                />

                {/* Sides */}
                <Lightformer
                    position={[0, 5, 5]}
                    scale={[0.5, 5, 1]}
                    intensity={0.3}
                    color="#b3c5db"
                />
                <Lightformer
                    position={[0, 5, -5]}
                    scale={[0.5, 5, 1]}
                    intensity={0.3}
                    color="#b3c5db"
                />
            </Environment>
        </>
    );
};

export default Lights;
