import { useGLTFLoader } from "drei";

const Model = () => {
  const path = useGLTFLoader("/scene.gltf", true);
  return <primitive object={path.scene} dispose={null} />;
};

export default Model;
