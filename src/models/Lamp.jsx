import { useGLTF } from '@react-three/drei';

const Lamp = (props) => {
    const { nodes, materials } = useGLTF('./assets/lamp.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.street_lamp_bulb.geometry}
                material={materials['lamp bulb']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.street_lamp.geometry}
                material={materials.street_lamp_01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.street_lamp_glass.geometry}
                material={materials.lampglass}
            />
        </group>
    );
};

useGLTF.preload('./assets/lamp.glb');
export default Lamp;
