# 使用官方 Next.js 镜像
FROM node:latest AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json / yarn.lock
COPY package*.json ./

# 安装依赖
RUN npm install --frozen-lockfile

# 复制所有项目文件
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 使用更小的基础镜像运行应用
FROM node:latest AS runner

# 设置工作目录
WORKDIR /app

# 复制构建的产物
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

# 复制 public 文件夹
COPY --from=builder /app/public ./public

# 安装生产环境依赖
RUN npm install --omit=dev

# 设置环境变量（可选）
ENV PORT=3000
ENV NODE_ENV=production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
