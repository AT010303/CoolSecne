import { useGLTF } from '@react-three/drei';

const Bench = (props) => {
    const { nodes, materials } = useGLTF('./assets/benchs.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bench.geometry}
                material={materials.blinn3SG}
            />
        </group>
    );
};

useGLTF.preload('./assets/benchs.glb');
export default Bench;
