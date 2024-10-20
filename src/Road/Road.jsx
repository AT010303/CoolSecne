import { useGLTF } from '@react-three/drei';

const Road = (props) => {
    const { nodes, materials } = useGLTF('./assets/road.glb');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ground.geometry}
                material={materials.Polygon_1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials['PBR Plowed Field Photogrammetry 8K']}
            />
        </group>
    );
};
useGLTF.preload('./assets/road.glb');
export default Road;
