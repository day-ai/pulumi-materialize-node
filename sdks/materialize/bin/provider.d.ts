import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the materialize package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * The base endpoint for Materialize.
     */
    readonly baseEndpoint: pulumi.Output<string | undefined>;
    /**
     * The endpoint for the Materialize Cloud API.
     */
    readonly cloudEndpoint: pulumi.Output<string | undefined>;
    /**
     * The Materialize database. Can also come from the `MZ_DATABASE` environment variable. Defaults to `materialize`.
     */
    readonly database: pulumi.Output<string | undefined>;
    /**
     * The default region if not specified in the resource
     */
    readonly defaultRegion: pulumi.Output<string | undefined>;
    /**
     * The endpoint for the Materialize API.
     */
    readonly endpoint: pulumi.Output<string | undefined>;
    /**
     * The Materialize host. Can also come from the `MZ_HOST` environment variable.
     */
    readonly host: pulumi.Output<string | undefined>;
    /**
     * Materialize host. Can also come from the `MZ_PASSWORD` environment variable.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * For testing purposes, the SSL mode to use.
     */
    readonly sslmode: pulumi.Output<string | undefined>;
    /**
     * The Materialize username. Can also come from the `MZ_USERNAME` environment variable.
     */
    readonly username: pulumi.Output<string | undefined>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions);
    /**
     * This function returns a Terraform config object with terraform-namecased keys,to be used with the Terraform Module Provider.
     */
    terraformConfig(): pulumi.Output<{
        [key: string]: any;
    }>;
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The base endpoint for Materialize.
     */
    baseEndpoint?: pulumi.Input<string>;
    /**
     * The endpoint for the Materialize Cloud API.
     */
    cloudEndpoint?: pulumi.Input<string>;
    /**
     * The Materialize database. Can also come from the `MZ_DATABASE` environment variable. Defaults to `materialize`.
     */
    database?: pulumi.Input<string>;
    /**
     * The default region if not specified in the resource
     */
    defaultRegion?: pulumi.Input<string>;
    /**
     * The endpoint for the Materialize API.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The Materialize host. Can also come from the `MZ_HOST` environment variable.
     */
    host?: pulumi.Input<string>;
    /**
     * Materialize host. Can also come from the `MZ_PASSWORD` environment variable.
     */
    password?: pulumi.Input<string>;
    /**
     * The Materialize SQL port. Can also come from the `MZ_PORT` environment variable.
     */
    port?: pulumi.Input<number>;
    /**
     * For testing purposes, the SSL mode to use.
     */
    sslmode?: pulumi.Input<string>;
    /**
     * The Materialize username. Can also come from the `MZ_USERNAME` environment variable.
     */
    username?: pulumi.Input<string>;
}
export declare namespace Provider {
    /**
     * The results of the Provider.terraformConfig method.
     */
    interface TerraformConfigResult {
        readonly result: {
            [key: string]: any;
        };
    }
}
