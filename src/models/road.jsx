import { useGLTF } from '@react-three/drei';
const Road = (props) => {
    const { nodes, materials } = useGLTF('./assets/road.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Road.geometry}
                material={materials.Polygon_1}
                position={[0.332, 0.024, 0]}
            />
        </group>
    );
};
useGLTF.preload('./assets/road.glb');
export default Road;
