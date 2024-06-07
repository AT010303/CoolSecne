import { useGLTF } from '@react-three/drei';

const Lamp = (props) => {
    const { nodes, materials } = useGLTF('./assets/streetLight.glb');
    return (
        <group {...props} dispose={null}>
            <group position={[-1.549, 1.787, 0]} scale={0.015}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0002.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0002_1.geometry}
                    material={materials['Material.006']}
                />
            </group>
        </group>
    );
};

useGLTF.preload('./assets/streetLight.glb');
export default Lamp;
