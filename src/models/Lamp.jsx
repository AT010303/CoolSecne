import { Sphere, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';



const Lamp = (props) => {

    const controls = useControls({
        decay: { value: 2, min: 0, max: 10, step: 0.01 },
        intensity:{ value: 4, min: 0, max: 30, step: 0.01 },
        
    });
    const decay = controls.decay;
    const intensity = controls.intensity;

    const { nodes, materials } = useGLTF('./assets/streetLight.glb');
    return (
        

        <group {...props} dispose={null}>
            <group position={[2.2, 1.787, 2.65]} scale={0.015}>
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
                <pointLight
                    decay={decay}
                    position={[0, -8, 0]}
                    intensity={intensity}
                    color={'#ffedd6'}
                />
                <Sphere scale={4.2} position={[0, -8, 0]}>
                    
                    <meshBasicMaterial color={'#ffffff'} />
                </Sphere>
            </group>
            <group position={[-1.549, 1.787, -2.6]} scale={0.015}>
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
                <pointLight
                    decay={decay}
                    position={[0, -8, 0]}
                    intensity={intensity}
                    color={'#ffedd6'}
                />
                <Sphere scale={4.2} position={[0, -8, 0]}>
                    
                    <meshBasicMaterial color={'#ffffff'} />
                </Sphere>
            </group>
            {/* <group position={[2.2, 1.787, -1.0]} scale={0.015}>
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
                <pointLight
                    decay={decay}
                    position={[0, -8, 0]}
                    intensity={intensity}
                    color={'#ffedd6'}
                />
                <Sphere scale={4.2} position={[0, -8, 0]}>
                    
                    <meshBasicMaterial color={'#ffffff'} />
                </Sphere>
            </group>
            <group position={[-1.549, 1.787, 1.0]} scale={0.015}>
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
                <pointLight
                
                    decay={decay}
                    position={[0, -8, 0]}
                    intensity={intensity}
                    color={'#ffedd6'}
                />
                <Sphere scale={4.2} position={[0, -8, 0]}>
                    
                    <meshBasicMaterial  color={'#ffffff'} />
                </Sphere>
            </group> */}
        </group>
    );
};

useGLTF.preload('./assets/streetLight.glb');
export default Lamp;
