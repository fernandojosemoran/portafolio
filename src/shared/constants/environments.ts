export default class Env {
    private constructor(){}

    public static readonly PROXY: string = import.meta.env.PROXY ?? "RENDER";
}