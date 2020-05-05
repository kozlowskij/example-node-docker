FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run build
#RUN npm run start
#RUN npm run dev
CMD [ "npm", "run", "dev" ]
