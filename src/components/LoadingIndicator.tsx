import { Spin } from "antd";

export default function LoadingIndicator() {
  return (
    <section className="flex justify-center !items-center !h-[calc(100vh-250px)] z-50">
      <Spin size='large'
        indicator={
          <svg className="animate-spin h-5 w-5 text-diamondPrimary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2zm2 8a8 8 0 018-8h2a10 10 0 00-10-10v2zm8 2a8 8 0 01-8-8h-2a10 10 0 0010 10v-2zm-2-8a8 8 0 01-8 8V20a10 10 0 0010-10h-2z"></path>
          </svg>
        }
      />
    </section>
  )
}