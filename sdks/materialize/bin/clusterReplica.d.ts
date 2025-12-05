import * as pulumi from "@pulumi/pulumi";
export declare class ClusterReplica extends pulumi.CustomResource {
    /**
     * Get an existing ClusterReplica resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterReplicaState, opts?: pulumi.CustomResourceOptions): ClusterReplica;
    /**
     * Returns true if the given object is an instance of ClusterReplica.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ClusterReplica;
    /**
     * The specific availability zone of the replica.
     */
    readonly availabilityZone: pulumi.Output<string>;
    /**
     * The cluster whose resources you want to create an additional computation of.
     */
    readonly clusterName: pulumi.Output<string>;
    readonly clusterReplicaId: pulumi.Output<string>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    readonly disk: pulumi.Output<boolean>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    readonly introspectionDebugging: pulumi.Output<boolean | undefined>;
    /**
     * The interval at which to collect introspection data.
     */
    readonly introspectionInterval: pulumi.Output<string | undefined>;
    /**
     * The identifier for the replica.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The size of the replica.
     */
    readonly size: pulumi.Output<string>;
    /**
     * Create a ClusterReplica resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterReplicaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ClusterReplica resources.
 */
export interface ClusterReplicaState {
    /**
     * The specific availability zone of the replica.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The cluster whose resources you want to create an additional computation of.
     */
    clusterName?: pulumi.Input<string>;
    clusterReplicaId?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    disk?: pulumi.Input<boolean>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    introspectionDebugging?: pulumi.Input<boolean>;
    /**
     * The interval at which to collect introspection data.
     */
    introspectionInterval?: pulumi.Input<string>;
    /**
     * The identifier for the replica.
     */
    name?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The size of the replica.
     */
    size?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ClusterReplica resource.
 */
export interface ClusterReplicaArgs {
    /**
     * The specific availability zone of the replica.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The cluster whose resources you want to create an additional computation of.
     */
    clusterName: pulumi.Input<string>;
    clusterReplicaId?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    disk?: pulumi.Input<boolean>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    introspectionDebugging?: pulumi.Input<boolean>;
    /**
     * The interval at which to collect introspection data.
     */
    introspectionInterval?: pulumi.Input<string>;
    /**
     * The identifier for the replica.
     */
    name?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The size of the replica.
     */
    size: pulumi.Input<string>;
}
