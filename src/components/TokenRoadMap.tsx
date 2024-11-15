import { Box, Flex, Text, IconButton, useMediaQuery } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface AboutProps {
    isRender: boolean;
    tokenExInVariants: Variants;
    language: string;
}

const TokenRoadMap: FC<AboutProps> = ({ isRender, tokenExInVariants, language }) => {
    const aboutMidAnimation = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const targetElement = document.querySelector('#roadmap');
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.target === targetElement) {
                    if (entry.isIntersecting) {
                        aboutMidAnimation.start("visible");
                    }
                }
            },
            { threshold: 0.0 }
        );
        if (!targetElement) return;
        observer.observe(targetElement);

        return () => {
            observer.unobserve(targetElement);
        }
    }, [isRender]);

    const roadmapItems = [
        { quarter: "Q1, Q2 2025", details: ["Project design and team formation", "Blockchain platform design and development", "Building a community and user base", "Securing investors and partners"], bg: "pink.600"},
        { quarter: "Q3, Q4 2025", details: ["Prototype launch and testing", "Deployment of the initial version of the GPT BITCOIN platform", "Strengthening regulatory and legal compliance", "Optimization of smart contracts and transactions using GPT technology"]},
        { quarter: "2026", details: ["Technical and functional improvements", "Enhancing platform stability and security", "Advancing and expanding the automation capabilities of smart contracts", "Adding multilingual support and various currency functions"] },
        { quarter: "2027", details: ["Reforming the governance system to enhance community decision-making participation", "Optimization through the integration of AI and blockchain technology and introduction of new service models", "Implementation of fully automated transaction systems through smart contracts", "Global marketing and user expansion"] },
        { quarter: "2028 ~", details: ["Policy adjustments and feedback collection in line with global market changes", "Provision of market forecasts and automated investment strategies using AI technology", "Appropriate response to regulatory changes in various countries", "Investor protection and provision of sustainable financial services"] },
    ];
    
    const roadmapItemsKR = [
        { quarter: "Q1, Q2 2025", details: ["프로젝트 설계 및 팀 구성", "블록체인 플랫폼 설계 및 개발", "커뮤니티 및 사용자 기반 구축", "투자자 및 파트너 확보"], bg: "pink.600"  },
        { quarter: "Q3, Q4 2025", details: ["프로토타입 출시 및 테스트", "초기 버전의 GPT BITCOIN 플랫폼 배포", "규제 및 법적 준수 강화", "GPT 기술을 활용한 스마트 계약 및 트랜잭션 최적화"] },
        { quarter: "2026", details: ["기술 및 기능 개선", "플랫폼의 안정성과 보안 강화를 위한 기술적 개선", "스마트 계약의 고도화 및 자동화 기능 확장", "다국어 지원 및 다양한 통화 기능 추가"] },
        { quarter: "2027", details: ["거버넌스 시스템 개편 및 커뮤니티의 직접적인 의사결정 참여 확대", "AI와 블록체인 기술의 통합을 통한 최적화 및 새로운 서비스 모델 도입", "스마트 계약을 통한 완전한 자동화 거래 시스템 구현", "글로벌 마케팅 및 사용자 확대"] },
        { quarter: "2028 ~", details: ["글로벌 시장의 변화에 맞춘 정책 조정 및 피드백 수렴", "AI 기술을 통한 시장 예측 및 자동화된 투자 전략 제공", "각국의 규제 환경 변화에 따라 적절한 대응", "투자자 보호 및 지속 가능한 금융 서비스 제공"] },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : roadmapItems.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < roadmapItems.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <>
        {language === "EN" ?  <Flex
            w="100%"
            minH="70vh"
            color="white"
            pt={56}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={20}>
                Roadmap
            </Text>
            <motion.div
                initial="hidden"
                animate={aboutMidAnimation}
                variants={tokenExInVariants}
            >
                <Flex
                    flexDir="column"
                    alignItems="center"
                    id="roadmap"
                    w={["350px","350px", "780px","1100px","1100px", "1100px", "1100px"]}
                    mx="auto"
                    gap={12}
                >
                    <Flex
                        position="relative"
                        alignItems="center"
                        w="100%"
                        justifyContent="center"
                        mb={10}
                    >
                        {isTabletOrSmaller ? (
                            <>
                                {/* Left Arrow */}
                                <IconButton
                                    icon={<ArrowBackIcon />}
                                    onClick={handlePrev}
                                    position="absolute"
                                    left={0}
                                    bg="transparent"
                                    color="white"
                                    fontSize="24px"
                                    _hover={{ bg: "gray.700" }}
                                    aria-label="Previous"
                                    
                                />

                                {/* Single Timeline Item for Tablet/Mobile */}
                                <Flex
                                    flexDir="column"
                                    alignItems="center"
                                    textAlign="center"
                                    w="200px"
                                    h="488px"
                                    bg={roadmapItems[currentIndex].bg || "transparent"}
                                    p={4}
                                    borderRadius="md"
                                >
                                    <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4} />
                                    <Text fontWeight="bold" mb={4}>{roadmapItems[currentIndex].quarter}</Text>
                                    <Box>
                                        {roadmapItems[currentIndex].details.map((detail, i) => (
                                            <Text fontSize="sm" key={i} mb={2}>
                                                - {detail}
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>

                                {/* Right Arrow */}
                                <IconButton
                                    icon={<ArrowForwardIcon />}
                                    onClick={handleNext}
                                    position="absolute"
                                    right={0}
                                    bg="transparent"
                                    fontSize="24px"
                                    color="white"
                                    _hover={{ bg: "gray.700" }}
                                    aria-label="Next"
                                />
                            </>
                        ) : (
                            /* Full Timeline for Desktop */
                            roadmapItems.map((item, index) => (
                                <Flex
                                    key={index}
                                    flexDir="column"
                                    alignItems="center"
                                    textAlign="center"
                                    w="200px"
                                    h="488px"
                                    bg={item.bg || "transparent"}
                                    p={4}
                                    borderRadius="md"
                                >
                                    <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4} />
                                    <Text fontWeight="bold" mb={4}>{item.quarter}</Text>
                                    <Box>
                                        {item.details.map((detail, i) => (
                                            <Text fontSize="sm" key={i} mb={2}>
                                                - {detail}
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>
                            ))
                        )}
                    </Flex>
                </Flex>
            </motion.div>
        </Flex> 
        
        : 
        
        <Flex
        w="100%"
        minH="70vh"
        color="white"
        pt={56}
        zIndex={2}
        flexDir="column"
        alignItems="center"
    >
        <Text fontSize="26px" mb={20}>
            로드맵
        </Text>
        <motion.div
            initial="hidden"
            animate={aboutMidAnimation}
            variants={tokenExInVariants}
        >
            <Flex
                flexDir="column"
                alignItems="center"
                id="roadmap"
                w={["350px","350px", "780px","1100px","1100px", "1100px", "1100px"]}
                mx="auto"
                gap={12}
            >
                <Flex
                    position="relative"
                    alignItems="center"
                    w="100%"
                    justifyContent="center"
                    mb={10}
                >
                    {isTabletOrSmaller ? (
                        <>
                            {/* Left Arrow */}
                            <IconButton
                                icon={<ArrowBackIcon />}
                                onClick={handlePrev}
                                position="absolute"
                                left={0}
                                bg="transparent"
                                color="white"
                                fontSize="24px"
                                _hover={{ bg: "gray.700" }}
                                aria-label="Previous"
                                
                            />

                            {/* Single Timeline Item for Tablet/Mobile */}
                            <Flex
                                flexDir="column"
                                alignItems="center"
                                textAlign="center"
                                w="200px"
                                h="488px"
                                bg={roadmapItems[currentIndex].bg || "transparent"}
                                p={4}
                                borderRadius="md"
                            >
                                <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4}/>
                                <Text fontWeight="bold" mb={4}>{roadmapItemsKR[currentIndex].quarter}</Text>
                                <Box>
                                    {roadmapItemsKR[currentIndex].details.map((detail, i) => (
                                        <Text fontSize="sm" key={i} mb={2}>
                                            - {detail}
                                        </Text>
                                    ))}
                                </Box>
                            </Flex>

                            {/* Right Arrow */}
                            <IconButton
                                icon={<ArrowForwardIcon />}
                                onClick={handleNext}
                                position="absolute"
                                right={0}
                                bg="transparent"
                                fontSize="24px"
                                color="white"
                                _hover={{ bg: "gray.700" }}
                                aria-label="Next"
                            />
                        </>
                    ) : (
                        /* Full Timeline for Desktop */
                        roadmapItemsKR.map((item, index) => (
                            <Flex
                                key={index}
                                flexDir="column"
                                alignItems="center"
                                textAlign="center"
                                w="200px"
                                h="488px"
                                bg={item.bg || "transparent"}
                                p={4}
                                borderRadius="md"
                            >
                                <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4} />
                                <Text fontWeight="bold" mb={4}>{item.quarter}</Text>
                                <Box>
                                    {item.details.map((detail, i) => (
                                        <Text fontSize="sm" key={i} mb={2}>
                                            - {detail}
                                        </Text>
                                    ))}
                                </Box>
                            </Flex>
                            ))
                            )}
                        </Flex>
                    </Flex>
                </motion.div>
            </Flex>}
        </>
       
    );
};

export default TokenRoadMap;
