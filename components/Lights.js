const Lights = () => {
    return ( 
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10,10,5]} intensity={1}/>
        </>
     );
}
 
export default Lights;