import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion"; 

interface AboutProps {
    isRender : boolean;
    tokenExInVariants : Variants;
    language : string;
}

const TokenAllocation : FC<AboutProps> = ({isRender, tokenExInVariants, language}) => {

    const tokenMidAnimation = useAnimation();

    useEffect(() => {
        const targetElement = document.querySelector('#tokenMid');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                console.log(entry.target)
                if(entry.target === targetElement) {
                    if(entry.isIntersecting) {
                        tokenMidAnimation.start("visible");
                    }
                }
            },
            {threshold: 0.0}
        )
        if(!targetElement) return;
        observer.observe(targetElement);

        return () => {
            observer.unobserve(targetElement);
        }
    },[isRender])

    return (
        <>
        {language === "EN" ? <Flex
            w="100%"
            minH="80vh"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={20}>
                TOKEN SALE PROCEEDS
            </Text>
            <motion.div
            initial="hidden"
            animate={tokenMidAnimation}
            variants={tokenExInVariants}
            >
                <Flex w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mx="auto" gap={12} id="tokenMid" justifyContent="center" flexDir="column" alignItems="center">
                    <Img w={["330px","330px","400px","400px","400px","400px","400px"]} src="images/distribution.png"/>
                    <Flex w={["340px","400px","480px","560px","560px","560px","560px"]} justifyContent="space-between">
                        <Flex flexDir="column" fontSize={["12px","12px","16px","16px","16px","16px","16px"]}>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="red.400" borderRadius="sm" mr={2}></Box>
                                <Text>Project Development & Research</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="blue.400" borderRadius="sm" mr={2}></Box>
                                <Text>Community Contributions</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="green.400" borderRadius="sm" mr={2}></Box>
                                <Text>Early Investors & Partners</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="orange.300" borderRadius="sm" mr={2}></Box>
                                <Text>Team & Founders</Text>
                            </Flex>
                        </Flex>
                        <Flex flexDir="column" fontSize={["12px","12px","16px","16px","16px","16px","16px"]}>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="purple.300" borderRadius="sm" mr={2}></Box>
                                <Text>Marketing & Operations</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="pink.300" borderRadius="sm" mr={2}></Box>
                                <Text>DAO & Governance</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="yellow.400" borderRadius="sm" mr={2}></Box>
                                <Text>Reserve & Emergency Fund</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="gray.500" borderRadius="sm" mr={2}></Box>
                                <Text>Legal Compliance & Security</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </motion.div>
        </Flex> 
        
        : 
        
        <Flex
            w="100%"
            minH="80vh"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={20}>
                토큰 분배
            </Text>
            <motion.div
            initial="hidden"
            animate={tokenMidAnimation}
            variants={tokenExInVariants}
            >
                <Flex w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mx="auto" gap={12} id="tokenMid" justifyContent="center" flexDir="column" alignItems="center">
                    <Img w={["330px","330px","400px","400px","400px","400px","400px"]} src="images/distribution.png"/>
                    <Flex w={["340px","400px","480px","560px","560px","560px","560px"]} justifyContent="space-between">
                        <Flex flexDir="column" fontSize={["12px","12px","16px","16px","16px","16px","16px"]}>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="red.400" borderRadius="sm" mr={2}></Box>
                                <Text>프로젝트 개발 및 기술 연구</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="blue.400" borderRadius="sm" mr={2}></Box>
                                <Text>커뮤니티 기여 및 보상 프로그램</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="green.400" borderRadius="sm" mr={2}></Box>
                                <Text>초기 투자자 및 파트너</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="orange.300" borderRadius="sm" mr={2}></Box>
                                <Text>팀 및 창립자 보유분</Text>
                            </Flex>
                        </Flex>
                        <Flex flexDir="column" fontSize={["12px","12px","16px","16px","16px","16px","16px"]}>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="purple.300" borderRadius="sm" mr={2}></Box>
                                <Text>마케팅 및 운영 자금</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="pink.300" borderRadius="sm" mr={2}></Box>
                                <Text>DAO 및 거버넌스</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="yellow.400" borderRadius="sm" mr={2}></Box>
                                <Text>예비 및 비상 자금</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="gray.500" borderRadius="sm" mr={2}></Box>
                                <Text>법적 준수 및 보안 강화</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </motion.div>
        </Flex>}
        </>
        
    )
}

export default TokenAllocation;