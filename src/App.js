import React from "react";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // 브라우저 캐시테이블에서 가지고 있는 데이터의 유통기한
//       // 무제한으로 해두면
//       // 불필요한 서버 요청을 줄일 수 있음
//       staleTime: Infinity,
//     },
//   },
// });

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
