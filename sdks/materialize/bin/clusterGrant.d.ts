import * as pulumi from "@pulumi/pulumi";
export declare class ClusterGrant extends pulumi.CustomResource {
    /**
     * Get an existing ClusterGrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterGrantState, opts?: pulumi.CustomResourceOptions): ClusterGrant;
    /**
     * Returns true if the given object is an instance of ClusterGrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ClusterGrant;
    readonly clusterGrantId: pulumi.Output<string>;
    /**
     * The cluster that is being granted on.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * The privilege to grant to the object.
     */
    readonly privilege: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The name of the role to grant privilege to.
     */
    readonly roleName: pulumi.Output<string>;
    /**
     * Create a ClusterGrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterGrantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ClusterGrant resources.
 */
export interface ClusterGrantState {
    clusterGrantId?: pulumi.Input<string>;
    /**
     * The cluster that is being granted on.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ClusterGrant resource.
 */
export interface ClusterGrantArgs {
    clusterGrantId?: pulumi.Input<string>;
    /**
     * The cluster that is being granted on.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName: pulumi.Input<string>;
}
