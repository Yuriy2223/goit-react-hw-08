import styles from "./Home.module.css";


export default function Home() {
  return (
    <>
      <h2 className={styles.pages}>Home</h2>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Task manager welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}

// import { Heading } from "@chakra-ui/react";
// import { Text } from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ChakraLink } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import { getAuth } from "components/redux/selectors";

// export default function HomePage() {
//   const isAuth = useSelector(getAuth);
//   return (
//     <Container>
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         minHeight="calc(100vh - 50px)"
//       >
//         <section>
//           <Heading as="h1" fontSize="6xl" fontWeight="500" textAlign="center">
//             Welcome to yourimport {(Box, Container)} from "@chakra-ui/react";
//             own Phonebook
//           </Heading>
//           <Text fontSize="3xl" fontWeight="300" textAlign="center" mt={10}>
//             Lets{" "}
//             {isAuth ? (
//               <>
//                 <span>go to my </span>
//                 <ChakraLink
//                   fontStyle="italic"
//                   color="GrayText"
//                   as={ReactRouterLink}
//                   to="/contacts"
//                 >
//                   phonebook
//                 </ChakraLink>
//               </>
//             ) : (
//               <ChakraLink fontStyle="italic" as={ReactRouterLink} to="/logIn">
//                 login
//               </ChakraLink>
//             )}
//           </Text>
//         </section>
//       </Box>
//     </Container>
//   );
// }

/**=================================== */

// import DocumentTitle from '../components/DocumentTitle';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

// export default function Home() {
//   return (
//     <>
//       <DocumentTitle>Home</DocumentTitle>

//       <div style={styles.container}>
//         <h1 style={styles.title}>
//           Task manager welcome page{' '}
//           <span role="img" aria-label="Greeting icon">
//             💁‍♀️
//           </span>
//         </h1>
//       </div>
//     </>
//   );
// }
