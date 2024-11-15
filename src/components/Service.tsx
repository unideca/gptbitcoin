import { Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import serviceTop from "../data/servicesTop.json"
import serviceTopKR from "../data/servicesTopKR.json"
import serviceBottom from "../data/servicesBottom.json"
import serviceBottomKR from "../data/servicesBottomKR.json"
import { motion, useAnimation, Variants } from "framer-motion"; 

interface ServicesProps {
    setIsRender : React.Dispatch<React.SetStateAction<boolean>>;
    tokenExInVariants : Variants;
    isRender : boolean;
    language : string;
}

const Services : FC<ServicesProps> = ({isRender, setIsRender, tokenExInVariants, language}) => {
    const serviceTopAnimation = useAnimation();
    const serviceBottomAnimation = useAnimation();
    
    useEffect(() => {
        setIsRender(true); //컴포넌트가 렌더링 될 때 발생하는 시간 차를 감지 하기 위함
    },[])

    useEffect(() => {
        const targetElement = document.querySelector('#serviceTop');
        const targetBottomElement = document.querySelector('#serviceBottom');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                for(let i=0; i<entries.length; i++) {
                    const entry = entries[0];
                    console.log(entry.target);
                    if(entry.target === targetElement) {
                        if(entry.isIntersecting) {
                            serviceTopAnimation.start("visible");
                            console.log("serviceTop visible")
                        }
                    }
                    
                    if(entry.target === targetBottomElement) {
                        if(entry.isIntersecting) {
                            serviceBottomAnimation.start("visible");
                            console.log("serviceBottom visible")
                        }
                    }
                }
                
            },
            {threshold : 0.1}
        );
        //entries추가
        if(targetElement) {
            console.log("Observing Service Top Element");
            observer.observe(targetElement);
        }
        if(targetBottomElement) {
            console.log("Observing Service Bottom Element");
            observer.observe(targetBottomElement);
        }
        
        return () => {
            if (targetElement) observer.unobserve(targetElement);
            if (targetBottomElement) observer.unobserve(targetBottomElement);
        } //이 코드가 있으면 내려갈 때 1번 올라올 때 1번 29번 줄이 출력
          //return 함수가 없을 때 내려갈 때 3번 올라올 때 3번 29번 줄이 출력
          //정확한 상태 감지하려면 정리함수 사용해주는 것을 권장
    },[isRender])
    
        return (  
        <>
        {language === "EN" ? <Flex
            w="100%"
            minH="100vh"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={12}>
                Our Solution For You
            </Text>
            <Text color="white" textAlign="center">
            it is true that Bitcoin faces several limitations, such as scalability, transaction speed, and energy efficiency. <br/>To address these issues, new types of blockchain-based projects are emerging, one of which is “GPT BITCOIN (GBIT).”
            </Text>
            <motion.div
            initial="hidden"
            animate={serviceTopAnimation}
            variants={tokenExInVariants}
            >
                <Grid templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mt={20} gap={8} id="serviceTop" justifyItems="center">
                    {serviceTop.map((v, i) => (
                        <GridItem w={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center">
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="330px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                    {serviceBottom.map((v, i) => (
                        <GridItem w ={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center">
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="350px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </motion.div>
        </Flex> 
        
        : 
        
        <Flex
            w="100%"
            minH="100vh"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={12}>
                우리의 솔루션을 만나보세요
            </Text>
            <Text color="white" textAlign="center">
            비트코인의 확장성, 거래 속도, 에너지 효율성 등 여러 가지 한계점이 존재합니다. <br/>이러한 문제를 해결하고자 새로운 형태의 블록체인 기반 프로젝트가 등장하고 있으며, 그 중 하나가 “GPT BITCOIN(GBIT)”입니다.
            </Text>
            <motion.div
            initial="hidden"
            animate={serviceTopAnimation}
            variants={tokenExInVariants}
            >
                <Grid templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mt={20} gap={8} id="serviceTop" justifyItems="center">
                    {serviceTopKR.map((v, i) => (
                        <GridItem w={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center" >
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="330px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                    {serviceBottomKR.map((v, i) => (
                        <GridItem w ={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center">
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="350px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </motion.div>
        </Flex>}
        </>
    )
}

export default Services;