import { useGLTF } from '@react-three/drei';

const Tree = (props) => {
    const { nodes, materials } = useGLTF('./assets/tree.glb');

    return (
        <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree.geometry}
        material={materials['Leaf_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree001.geometry}
        material={materials['Trunk_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree002.geometry}
        material={materials.Petiole_01}
      />
    </group>
    );
};

useGLTF.preload('./assets/tree.glb');
export default Tree;
