import HttpBaseService from "./HttpBaseService";

export default class PostService extends HttpBaseService{
  get(url){
    console.log(url);    
  }
}