import { useRef, useState } from "react";
import {useFrame} from 'react-three-fiber'

export default function Box(props) {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
  
    useFrame(() => {
      if (hovered && !active) {
        mesh.current.rotation.z += 0.01;
        mesh.current.rotation.x += 0.01;
      }
      if (hovered && active) {
        mesh.current.rotation.y += 0.02;
        mesh.current.rotation.x += 0.06;
      }
    });
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          color={hovered ? "green" : "blue"}
        />
      </mesh>
    );
  }