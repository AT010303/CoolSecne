import { useGLTF } from '@react-three/drei';
const Grass = (props) => {
    const { nodes, materials } = useGLTF('./assets/grass.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials['Foilage_Grass_A.001']}
                position={[-1.489, 0.085, 0]}
                scale={0.284}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials['Foliage_Grass_B.001']}
                position={[-1.489, 0.085, 0]}
                scale={0.284}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_18.geometry}
                material={materials['Foliage_Grass_F.001']}
                position={[-1.489, 0.085, 0]}
                scale={0.284}
            />
        </group>
    );
};
useGLTF.preload('./assets/grass.glb');
export default Grass;
