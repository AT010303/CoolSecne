import { useGLTF } from '@react-three/drei';

const Railing = (props) => {
    const { nodes, materials } = useGLTF('./assets/raling.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle010.geometry}
                material={materials['Cast Iron Fencing, New, Fleur Module']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle010_1.geometry}
                material={materials['Cast Iron Fencing, New, Fleur Main']}
            />
        </group>
    );
};

useGLTF.preload('./assets/raling.glb');
export default Railing;
