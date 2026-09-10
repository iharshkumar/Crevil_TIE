import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins:[react()],
    server:{
        host:'0.0.0.0',
        allowedHosts: ['5174-kode-ws-c68361e34.hebbale.academy']
    }
})